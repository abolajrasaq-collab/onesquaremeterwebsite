import * as React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Send, CheckCircle } from 'lucide-react';
import SEO from '../components/SEO';

const Contact: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <div className="bg-white">
            <SEO title="Contact Us" description="Get in touch with ONE SQUARE METER — visit our Abuja office, call us, or send an inquiry about luxury real estate investment opportunities." />
            {/* Hero Section */}
            <section className="relative bg-[#325074] py-32 px-6 lg:px-12 overflow-hidden text-center">
                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6"
                    >
                        Contact <span className="text-[#FEC12C]">Us</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-white/80 font-light leading-relaxed"
                    >
                        We are ready to help you build your legacy. Reach out to us today.
                    </motion.p>
                </div>
                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                    <div className="absolute bottom-20 left-20 w-64 h-64 bg-[#FEC12C] rounded-full blur-[80px]" />
                </div>

                {/* Hero Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1423666639041-f142fcb96319?auto=format&fit=crop&q=80&w=2000"
                        alt="Contact Us"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#325074]/90 to-[#325074]/80" />
                </div>
            </section>

            {/* Contact Information & Form */}
            <section className="py-24 px-6 lg:px-12 bg-slate-50">
                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-3xl font-bold text-[#325074] mb-8">Get in Touch</h2>
                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-[#325074]/10 text-[#325074] rounded-full flex items-center justify-center shrink-0">
                                    <MapPin />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#325074] text-lg mb-1">Visit Us</h3>
                                    <p className="text-slate-600">No.1 Audu Ogbe Street, Jabi, Abuja, Nigeria</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-[#325074]/10 text-[#325074] rounded-full flex items-center justify-center shrink-0">
                                    <Phone />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#325074] text-lg mb-1">Call Us</h3>
                                    <p className="text-slate-600">0907 777 7234</p>
                                    <p className="text-slate-600">0902 002 0077</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6">
                                <div className="w-12 h-12 bg-[#325074]/10 text-[#325074] rounded-full flex items-center justify-center shrink-0">
                                    <Mail />
                                </div>
                                <div>
                                    <h3 className="font-bold text-[#325074] text-lg mb-1">Email Us</h3>
                                    <p className="text-slate-600">info@1sqmbydantata.com</p>
                                    <p className="text-slate-600">hello@1sqmbydantata.com</p>
                                </div>
                            </div>
                        </div>

                        {/* Google Maps Embed */}
                        <div className="mt-12 rounded-2xl overflow-hidden shadow-lg border border-slate-200">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.1!2d7.41!3d9.06!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDMnMzYuMCJOIDfCsDI0JzM2LjAiRQ!5e0!3m2!1sen!2sng!4v1"
                                width="100%"
                                height="256"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="1SQM Office Location"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-100">
                        <h2 className="text-2xl font-bold text-[#325074] mb-6">Send a Message</h2>

                        {/* Success Toast */}
                        <AnimatePresence>
                            {submitted && (
                                <motion.div
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl flex items-center gap-3"
                                >
                                    <CheckCircle size={20} />
                                    <span className="font-medium">Thank you! We'll get back to you shortly.</span>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#325074]/20 focus:border-[#325074] transition-all" placeholder="John" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                                    <input type="text" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#325074]/20 focus:border-[#325074] transition-all" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                                <input type="email" required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#325074]/20 focus:border-[#325074] transition-all" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Subject</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#325074]/20 focus:border-[#325074] transition-all">
                                    <option>General Inquiry</option>
                                    <option>Sales & Investment</option>
                                    <option>Partnership</option>
                                    <option>Support</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                                <textarea rows={4} required className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#325074]/20 focus:border-[#325074] transition-all" placeholder="How can we help you?" />
                            </div>
                            <button type="submit" className="w-full bg-[#325074] text-white font-bold py-4 rounded-xl hover:bg-[#203650] transition-colors flex items-center justify-center gap-2">
                                <Send size={18} /> Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
