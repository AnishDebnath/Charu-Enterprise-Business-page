import React from 'react';
import { Download, ChevronRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
    onCtaClick: () => void;
    onAboutClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick, onAboutClick }) => {
    const handleDownload = () => {
        window.open('https://drive.google.com/drive/folders/1B-Wc2ATVeDuj1ZZAhDpOYWIJ6JuBC4Rc?usp=sharing', '_blank');
    };

    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden industrial-gradient">
            {/* Background patterns */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 100 L100 0 L100 100 Z" fill="white" />
                </svg>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-800/20 transform skew-x-12 translate-x-32" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center space-x-2 bg-blue-800/40 backdrop-blur-sm border border-blue-400/30 px-4 py-2 rounded-full">
                            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
                            <span className="text-blue-100 text-xs font-bold uppercase tracking-widest">Global Export Partner Since 1969</span>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
                            Manufacturers of Fence Fittings
                        </h1>

                        <p className="text-lg text-blue-100/90 max-w-xl font-medium leading-relaxed">
                            Manufacturers & exporters of pressed steel, malleable, and aluminum fence fittings with 50+ years of manufacturing excellence.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleDownload}
                                className="flex items-center justify-center space-x-3 bg-white text-blue-900 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-2xl shadow-blue-900/40 group"
                            >
                                <>
                                    <Download className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                                    <span>Download Full Catalogue (PDF)</span>
                                </>
                            </button>

                            <button
                                onClick={onAboutClick}
                                className="flex items-center justify-center space-x-3 border-2 border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all"
                            >
                                <span>About us</span>
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-6 pt-4">
                            {["ISO 9001:2015", "Govt Recognized", "Global Delivery"].map((tag) => (
                                <div key={tag} className="flex items-center text-blue-200 text-sm font-medium">
                                    <CheckCircle2 className="w-4 h-4 mr-2 text-blue-400" />
                                    {tag}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative hidden lg:block">
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <img
                                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                                alt="Manufacturing Excellence"
                                className="w-full h-auto"
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
                            <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/10 backdrop-blur-md rounded-xl border border-white/20">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-white font-bold text-lg">150 Million+</p>
                                        <p className="text-blue-200 text-xs">Components Exported</p>
                                    </div>
                                    <div className="h-10 w-px bg-white/20" />
                                    <div>
                                        <p className="text-white font-bold text-lg">4+ Continents</p>
                                        <p className="text-blue-200 text-xs">Serving Globally</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-400/20 blur-3xl rounded-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};
