import React, { useState } from 'react';
import { User, ShieldCheck, Clock, Award, MapPin, Phone, Mail, Globe, ArrowLeft, Heart, Zap, FileCheck, X } from 'lucide-react';
import { ABOUT_PAGE_DATA } from './data';
import aboutUsImage from '../../../assets/about-us.jpg';

interface AboutPageProps {
    onBack: () => void;
}

interface Certificate {
    title: string;
    subtitle: string;
    image?: string;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onBack }) => {
    const [selectedImage, setSelectedImage] = useState<Certificate | null>(null);

    React.useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImage]);
    return (
        <div className="bg-white min-h-screen pt-20 animate-in fade-in duration-500">
            {/* Hero Section */}
            <section className="industrial-gradient py-24 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <button
                        onClick={onBack}
                        className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors mb-8 font-bold uppercase tracking-widest text-xs"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back to Home</span>
                    </button>
                    <div className="max-w-3xl">
                        <h1 className="text-4xl lg:text-5xl font-black mb-6 tracking-tight">About Charu Enterprises</h1>
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
                                {ABOUT_PAGE_DATA.legacy}
                            </div>
                            <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                                {ABOUT_PAGE_DATA.whoWeAre}
                            </h2>
                            <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                                <p>
                                    {ABOUT_PAGE_DATA.description}
                                </p>
                                <p>
                                    {ABOUT_PAGE_DATA.additionalInfo}
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden shadow-2xl">
                                <img
                                    src={aboutUsImage}
                                    className="w-full h-full object-cover"
                                    alt="Industrial Precision"
                                    loading="lazy"
                                    decoding="async"
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
                    <div className="flex justify-center items-center gap-8 md:gap-12 flex-wrap">
                        {[
                            { image: ABOUT_PAGE_DATA.credentials.satisfaction.image },
                            { image: ABOUT_PAGE_DATA.credentials.years.image },
                            { image: ABOUT_PAGE_DATA.credentials.iso.image }
                        ].map((badge, i) => (
                            <div key={i} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow p-6">
                                {badge.image && (
                                    <div className="bg-gray-50 w-40 h-40 rounded-2xl flex items-center justify-center overflow-hidden">
                                        <img
                                            src={badge.image}
                                            alt="Badge"
                                            className="w-4/5 h-4/5 object-contain"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    </div>
                                )}
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
                        {ABOUT_PAGE_DATA.certificates.map((cert, index) => (
                            <div key={index} className="group relative bg-slate-50 rounded-xl p-4 border border-gray-100 shadow-sm cursor-pointer hover:shadow-lg transition-shadow duration-200" onClick={() => setSelectedImage(cert)}>
                                <div className="aspect-[3/4] bg-white rounded-lg overflow-hidden border border-gray-200 mb-4 relative will-change-transform">
                                    {cert.image ? (
                                        <img
                                            src={cert.image}
                                            alt={cert.title}
                                            className="w-full h-full object-cover"
                                            loading="lazy"
                                            decoding="async"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-blue-50 to-slate-100 flex items-center justify-center">
                                            <FileCheck className="w-12 h-12 text-blue-300" />
                                        </div>
                                    )}
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
                        {ABOUT_PAGE_DATA.founders.map((founder, index) => (
                            <div key={founder.id} className={`flex flex-col lg:flex-row items-center gap-12 ${index === 0 ? '' : 'lg:flex-row-reverse'}`}>
                                <div className="lg:w-2/3 order-2 lg:order-1">
                                    <h3 className="text-2xl font-black text-blue-900 mb-1">{founder.name}</h3>
                                    <p className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-6">{founder.role}</p>
                                    <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                                        <p>
                                            {founder.bio}
                                        </p>
                                    </div>
                                </div>
                                <div className="lg:w-1/3 order-1 lg:order-2 flex justify-center">
                                    <div className="w-70 aspect-[4/5] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl relative">
                                        <img
                                            src={founder.image}
                                            className="w-full h-full object-cover"
                                            alt={founder.name}
                                            loading="lazy"
                                            decoding="async"
                                        />
                                        <div className="absolute inset-0 border-[16px] border-white/10 m-6 rounded-2xl pointer-events-none" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Plant & Team Section */}
            <section className="py-24 bg-gradient-to-b from-slate-50 to-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Our Facilities</span>
                        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mt-4">Our Plant & Team</h2>
                        <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
                            State-of-the-art manufacturing facility with a dedicated team committed to excellence and quality.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ABOUT_PAGE_DATA.plantImages.map((item, index) => (
                            <div key={item.id} className="group relative bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer">
                                <div className="aspect-[4/5] bg-slate-100 overflow-hidden relative">
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        loading="lazy"
                                        decoding="async"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <p className="text-white font-semibold px-4 py-4 w-full text-sm">{item.alt}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Company Details Section */}
            <section className="py-16 md:py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">Company Information</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-6">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-4">Office Address</h4>
                            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                                {ABOUT_PAGE_DATA.officeInfo.office}
                            </p>
                        </div>

                        <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm">
                            <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-6">
                                <Zap className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-4">Factory Address</h4>
                            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                                {ABOUT_PAGE_DATA.officeInfo.factory}
                            </p>
                        </div>

                        <div className="bg-white p-8 md:p-10 rounded-2xl border border-gray-100 shadow-sm md:col-span-2 lg:col-span-1">
                            <div className="w-12 h-12 bg-blue-50 text-blue-900 rounded-lg flex items-center justify-center mb-6">
                                <Phone className="w-6 h-6" />
                            </div>
                            <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs mb-4">Contact Details</h4>
                            <ul className="space-y-3 text-sm text-slate-600 font-medium">
                                <li className="flex items-center space-x-2">
                                    <span className="text-blue-900 font-bold">IN:</span>
                                    <span>{ABOUT_PAGE_DATA.officeInfo.contacts.india}</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <span className="text-blue-900 font-bold">USA:</span>
                                    <span>{ABOUT_PAGE_DATA.officeInfo.contacts.usa}</span>
                                </li>
                                <li className="flex items-center space-x-2">
                                    <Mail className="w-4 h-4 text-blue-400" />
                                    <span className="text-xs md:text-sm">{ABOUT_PAGE_DATA.officeInfo.contacts.email}</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fullscreen Image Modal */}
            {selectedImage && (
                <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200" onClick={() => setSelectedImage(null)}>
                    <div className="relative max-w-4xl my-auto" onClick={(e) => e.stopPropagation()}>
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-50"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <div className="bg-white rounded-lg overflow-hidden">
                            {selectedImage.image && (
                                <img
                                    src={selectedImage.image}
                                    alt={selectedImage.title}
                                    className="w-full h-full object-contain"
                                    loading="eager"
                                    decoding="sync"
                                />
                            )}
                            <div className="p-6 bg-slate-50 border-t border-gray-200">
                                <h3 className="text-xl font-bold text-slate-900">{selectedImage.title}</h3>
                                <p className="text-slate-600 mt-2">{selectedImage.subtitle}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
