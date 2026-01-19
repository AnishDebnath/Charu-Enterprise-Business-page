import React from 'react';
import { User, ShieldCheck, Clock, Award, MapPin, Phone, Mail, Globe, ArrowLeft, Heart, Zap, FileCheck } from 'lucide-react';

interface AboutPageProps {
    onBack: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
    return (
        <div className="bg-white min-h-screen pt-20 animate-in fade-in duration-500">
            {/* Hero Section */}
            <section className="industrial-gradient py-24 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.1" fill="none" />
                    </svg>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <button
                        onClick={onBack}
                        className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors mb-8 font-bold uppercase tracking-widest text-xs"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Home</span>
                    </button>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">About Charu Enterprises</h1>
                        <p className="text-xl text-blue-100/80 leading-relaxed font-medium">
                            Manufacturing Excellence & Global Engineering Trust Since 1969.
                        </p>
                    </div>
                </div>
            </section>

            {/* Who We Are Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <div className="inline-block px-4 py-1.5 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-xs font-bold uppercase tracking-widest">
                                Our Legacy
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                                Who We Are
                            </h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    With five decades of expertise, Charu Enterprises – India has been a global leader in fence fittings manufacturing, delivering over 150 million pieces across four continents. We specialize in Pressed Steel, Malleable, and Aluminum Fence Fittings and Tension Bars, all galvanized or powder-coated for superior durability.
                                </p>
                                <p>
                                    A trusted name in the industry, we have been exhibiting at FENCETECH for over 30 years and have received prestigious awards from the Government of India. Our 20,000 SQFT factory facility features an in-house galvanizing plant, die and mold development, and a testing laboratory, ensuring top-quality, innovative, and custom solutions for the global market.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1565608438257-fac3c27beb36?auto=format&fit=crop&q=80&w=800"
                                    className="w-full h-full object-cover"
                                    alt="Industrial Precision"
                                />
                            </div>
                            <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl border border-gray-100 hidden md:block">
                                <p className="text-4xl font-black text-blue-900 leading-none">55+</p>
                                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-2">Years of Innovation</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Credibility Badges */}
            <section className="py-20 bg-slate-50 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h3 className="text-xl font-bold text-slate-900 uppercase tracking-widest text-center">Our Commitment to Quality</h3>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { label: "100% Satisfaction", desc: "Zero Defects Manufacturing Commitment", icon: <Zap className="w-6 h-6" /> },
                            { label: "55 Years of Growth", desc: "1969 – Present", icon: <Clock className="w-6 h-6" /> },
                            { label: "ISO 9001:2015 Certified", desc: "International Quality Management Standards", icon: <Award className="w-6 h-6" /> }
                        ].map((badge, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex items-center space-x-6 hover:shadow-md transition-shadow">
                                <div className="w-14 h-14 bg-blue-900 text-white rounded-xl flex items-center justify-center shrink-0">
                                    {badge.icon}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{badge.label}</h4>
                                    <p className="text-sm text-slate-500">{badge.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certificates Section */}
            <section className="py-24 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Accreditations</span>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-4">Certifications & Awards</h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                            Recognized for our adherence to international quality standards and excellence in export performance.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "ISO 9001:2015", subtitle: "Quality Management", image: "https://placehold.co/400x600/e2e8f0/1e293b?text=ISO+Certificate" },
                            { title: "EEPC India", subtitle: "Export Excellence", image: "https://placehold.co/400x600/e2e8f0/1e293b?text=EEPC+Award" },
                            { title: "Star Export House", subtitle: "Govt. of India Recognized", image: "https://placehold.co/400x600/e2e8f0/1e293b?text=Star+House" },
                            { title: "FENCETECH Member", subtitle: "30+ Years Association", image: "https://placehold.co/400x600/e2e8f0/1e293b?text=Membership" }
                        ].map((cert, index) => (
                            <div key={index} className="group relative bg-slate-50 rounded-xl p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                                <div className="aspect-[3/4] bg-white rounded-lg overflow-hidden border border-gray-200 mb-4 relative">
                                    {/* Decorative corner */}
                                    <div className="absolute top-0 right-0 w-12 h-12 bg-blue-50 rounded-bl-full z-10" />
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300" />

                                    {/* Icon overlay */}
                                    <div className="absolute top-3 right-3 z-20 text-blue-200">
                                        <FileCheck className="w-5 h-5" />
                                    </div>
                                </div>
                                <div className="text-center">
                                    <h4 className="font-bold text-slate-900 text-lg">{cert.title}</h4>
                                    <p className="text-sm text-slate-500 font-medium mt-1">{cert.subtitle}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Founders Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Visionary Leadership</span>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-4">Our Founders</h2>
                    </div>

                    <div className="space-y-24">
                        {/* Profile 1 - OP Maskara */}
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-3/5 order-2 lg:order-1">
                                <h3 className="text-2xl font-black text-blue-900 mb-1">Mr. OP Maskara</h3>
                                <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-6">Founder President</p>
                                <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                                    <p>
                                        Our Founder President, a renowned Yoga Guru, has taught yoga to over 300,000 people across India for free over two decades. With 62 years of experience in exports and engineering goods, he has also served as Deputy Regional Chairman (ER) of the Government Engineering Export Promotion Council.
                                    </p>
                                    <p>
                                        A Lions Clubs International member for 57 years, he was Deputy District Governor and has appeared regularly on television shows, embodying a life dedicated to industrial excellence and social service.
                                    </p>
                                </div>
                            </div>
                            <div className="lg:w-2/5 order-1 lg:order-2">
                                <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400"
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                        alt="Mr. OP Maskara"
                                    />
                                    <div className="absolute inset-0 border-[16px] border-white/10 m-6 rounded-2xl pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        {/* Profile 2 - Som Maskara */}
                        <div className="flex flex-col lg:flex-row items-center gap-16">
                            <div className="lg:w-2/5">
                                <div className="aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400"
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                        alt="Mr. Som Maskara"
                                    />
                                    <div className="absolute inset-0 border-[16px] border-white/10 m-6 rounded-2xl pointer-events-none" />
                                </div>
                            </div>
                            <div className="lg:w-3/5">
                                <h3 className="text-2xl font-black text-blue-900 mb-1">Mr. Som Maskara</h3>
                                <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-6">Vice President</p>
                                <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                                    <p>
                                        Our Vice President is a dedicated humanitarian and former President of Leo Club International, actively contributing to projects that provide meals to millions of underprivileged children. With a strong passion for sports, he participates in competitive badminton and rifle shooting, demonstrating discipline and precision.
                                    </p>
                                    <p>
                                        As an advanced yoga practitioner, he embraces a holistic approach to well-being, combining physical fitness with mindfulness. His diverse experiences reflect a strong commitment to leadership, community service, and personal excellence.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Company Details Section */}
            <section className="py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-slate-900">Company Information</h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-6">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-4">Office Address</h4>
                            <p className="text-slate-600 leading-relaxed">
                                28 B, Shakespeare Sarani, 10 B, Neelamber Building, Kolkata – 700017, India
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-4">Factory Address</h4>
                            <p className="text-slate-600 leading-relaxed">
                                Saraswati Complex, Bhandardaha, Domjur, Howrah – 711405 (Near Srijon Industrial Park), West Bengal, India
                            </p>
                        </div>

                        <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-6">
                                <Phone className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-4">Contact Details</h4>
                            <ul className="space-y-3 text-sm text-slate-600 font-medium">
                                <li className="flex items-center space-x-2">
                                    <span className="text-blue-900 font-bold">IN:</span>
                                    <span>+91 9830083777</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="text-blue-900 font-bold">USA:</span>
                                    <span>+1 (346) 433-7572</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <Mail className="w-4 h-4 text-blue-400" />
                                    <span>opmaskara1008@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
