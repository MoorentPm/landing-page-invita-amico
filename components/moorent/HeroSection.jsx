
import React, { useState, useEffect } from 'react';
import { Users, ArrowRight } from 'lucide-react';

export default function HeroSection() {
    const [showTitle, setShowTitle] = useState(false);
    const [showSubtitle, setShowSubtitle] = useState(false);
    const [showDescription, setShowDescription] = useState(false);

    useEffect(() => {
        setTimeout(() => setShowTitle(true), 200);
        setTimeout(() => setShowSubtitle(true), 400);
        setTimeout(() => setShowDescription(true), 600);
    }, []);

    return (
        <section id="hero" className="min-h-[90vh] flex items-center justify-center pt-24 pb-12 fade-in">
            <div className="text-center max-w-6xl mx-auto">
                <div className="mb-8">
                    <img src="https://i.imgur.com/aazwI7x.png" alt="Moorent PM Logo" className="w-40 md:w-48 h-auto mx-auto mb-8" />
                    
                    <h1 className={`text-5xl md:text-8xl font-extralight text-white tracking-tight mb-6 transition-all duration-500 ${showTitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        Programma<br/>
                        <span className="bg-gradient-to-r from-[#F5E5E5] to-[#E0D0D0] bg-clip-text text-transparent font-light">
                            "Invita un Amico"
                        </span>
                    </h1>
                    
                    <p className={`text-2xl md:text-3xl font-extralight text-white text-opacity-80 mb-8 transition-all duration-500 ${showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                        Il valore delle relazioni: crescita attraverso la fiducia
                    </p>
                </div>

                {showDescription && (
                    <div className="glass-card rounded-3xl p-12 max-w-5xl mx-auto opacity-0 animate-fade-in-fast border border-white border-opacity-10">
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <Users className="w-8 h-8 text-blue-400" />
                            <h2 className="text-xl font-light text-white uppercase tracking-widest">La nostra filosofia</h2>
                        </div>
                        <p className="text-xl md:text-2xl text-white text-opacity-90 leading-relaxed font-extralight mb-8">
                            Crediamo nel potere del passaparola qualificato e nella forza delle relazioni di fiducia. 
                            Per questo abbiamo creato un programma esclusivo che premia chi ci aiuta a crescere con proprietari di qualità.
                        </p>
                        <div className="flex items-center justify-center gap-4" style={{ color: '#F5E5E5' }}>
                            <span className="text-4xl font-bold">€500</span>
                            <ArrowRight className="w-6 h-6" />
                            <span className="text-white text-opacity-80 font-light">Per ogni nuovo contratto</span>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
