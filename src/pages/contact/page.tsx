import React from 'react';
import { Mail, MapPin, Phone, ArrowLeft, Clock, Globe, Building2, Smartphone } from 'lucide-react';
import { InquiryForm } from '../../components/common/InquiryForm';

interface ContactPageProps {
    onBack: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
    return (
        <div className="bg-white min-h-screen pt-20 animate-in fade-in duration-500">
            {/* Hero Section */}
            <section className="industrial-gradient py-20 text-white relative overflow-hidden">
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
                        <h1 className="text-4xl lg:text-5xl font-black mb-4 tracking-tight">Contact Us</h1>
                        <p className="text-xl text-blue-100/80 leading-relaxed font-medium">
                            Global Support & Manufacturing Headquarters.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24 bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">

                        {/* Contact Information Column */}
                        <div className="lg:col-span-1 space-y-8">
                            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                                <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center">
                                    <Building2 className="w-5 h-5 text-blue-600 mr-2" />
                                    Headquarters
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Office Address</p>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            28 B, Shakespeare Sarani, 10 B, Neelamber Building Kolkata - 700017, India
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Factory Address</p>
                                        <p className="text-slate-600 text-sm leading-relaxed">
                                            Saraswati Complex, Bhandardaha, Domjur, Howrah 711405 (Near Srijon Industrial Park) West Bengal, India
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-blue-900 p-8 rounded-2xl shadow-lg text-white">
                                <h3 className="text-lg font-bold mb-6 flex items-center">
                                    <Globe className="w-5 h-5 text-blue-300 mr-2" />
                                    Global Reach
                                </h3>
                                <div className="space-y-6">
                                    <div>
                                        <p className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">India Contact</p>
                                        <div className="flex items-center space-x-2">
                                            <Phone className="w-4 h-4 text-blue-300" />
                                            <span className="font-medium">+91 9830083777</span>
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">USA Contact</p>
                                        <div className="flex items-center space-x-2">
                                            <Smartphone className="w-4 h-4 text-blue-300" />
                                            <span className="font-medium">+1 (346) 433-7572</span>
                                        </div>
                                    </div>
                                    <div className="pt-4 border-t border-blue-800">
                                        <p className="text-xs font-bold text-blue-300 uppercase tracking-widest mb-1">Email Us</p>
                                        <div className="flex items-center space-x-2">
                                            <Mail className="w-4 h-4 text-blue-300" />
                                            <span className="font-medium">opmaskara1008@gmail.com <br></br> som83777@gmail.com</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start space-x-4">
                                <Clock className="w-6 h-6 text-blue-600 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Business Hours</h4>
                                    <p className="text-sm text-slate-500 mt-1">Monday – Saturday</p>
                                    <p className="text-sm text-slate-900 font-medium">09:00 AM – 06:00 PM (IST)</p>
                                </div>
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-2">
                            <InquiryForm type="CONTACT" />

                            {/* Map Placeholder */}
                            {/* <div className="mt-8 bg-gray-200 rounded-3xl h-64 w-full relative overflow-hidden group">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center">
                                        <MapPin className="w-10 h-10 text-slate-400 mx-auto mb-2" />
                                        <p className="text-slate-500 font-medium">Map Integration Unavailable</p>
                                        <p className="text-slate-400 text-sm">Interactive maps require an API key</p>
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-300 cursor-pointer" />
                            </div> */}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};
