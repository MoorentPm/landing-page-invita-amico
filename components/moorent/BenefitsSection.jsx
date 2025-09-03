import React from 'react';
import { MapPin, TrendingUp, Home, Clock, Star, Shield } from 'lucide-react';

const CriteriaCard = React.memo(({ title, description, icon: Icon, index }) => (
    <div className="glass-card rounded-xl p-6 hover:bg-black hover:bg-opacity-20 transition-all duration-300 hover:scale-105 h-full"
        style={{ animationDelay: `${index * 100}ms` }}>
        <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#F5E5E5] bg-opacity-20 border border-[#F5E5E5] border-opacity-30 flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 text-[#F5E5E5]" />
            </div>
            <div>
                <h4 className="text-white font-medium mb-2">{title}</h4>
                <p className="text-white text-opacity-80 font-light text-sm">{description}</p>
            </div>
        </div>
    </div>
));

export default function BenefitsSection() {
    const criteria = [
        {
            title: "Zone Strategiche",
            description: "Immobili situati in zone centrali, ben collegate o con alto potenziale turistico.",
            icon: MapPin
        },
        {
            title: "Potenziale di Valorizzazione", 
            description: "Proprietà con buone caratteristiche che possono essere ottimizzate per generare maggiori rendite.",
            icon: TrendingUp
        },
        {
            title: "Stato dell'Immobile",
            description: "Immobili già arredati o che necessitano di interventi minimi per essere messi a reddito.",
            icon: Home
        },
        {
            title: "Proprietari Impegnati",
            description: "Proprietari con poco tempo per la gestione diretta che cercano un servizio premium.",
            icon: Clock
        },
        {
            title: "Immobili Sottoutilizzati",
            description: "Proprietà attualmente vuote o affittate con contratti tradizionali poco redditizi.",
            icon: Star
        }
    ];

    return (
        <section id="benefits" className="fade-in space-y-16">
            <div className="text-center mb-16">
                <h2 className="text-sm font-light text-white text-opacity-70 mb-3 uppercase tracking-widest">Strategia</h2>
                <p className="text-4xl md:text-5xl font-extralight text-white tracking-tight">Massimizza le Possibilità</p>
                <p className="text-xl text-white text-opacity-70 mt-6 font-light max-w-4xl mx-auto">
                    I contatti con maggiori probabilità di successo sono proprietari con queste caratteristiche
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {criteria.map((criterion, index) => (
                    <CriteriaCard 
                        key={index}
                        index={index}
                        title={criterion.title}
                        description={criterion.description}
                        icon={criterion.icon}
                    />
                ))}
            </div>

            {/* Success Tips */}
            <div className="glass-card rounded-3xl p-12 border-l-4 border-[#F5E5E5]">
                <div className="flex items-center gap-4 mb-8">
                    <Shield className="w-8 h-8 text-[#F5E5E5]" />
                    <h3 className="text-2xl font-light text-white">Consigli per il Successo</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="text-white font-medium mb-4">Approccio Consigliato:</h4>
                        <ul className="space-y-3 text-white text-opacity-80 font-light">
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#F5E5E5] rounded-full mt-2 flex-shrink-0"></div>
                                <span>Spiega i vantaggi della gestione premium</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#F5E5E5] rounded-full mt-2 flex-shrink-0"></div>
                                <span>Evidenzia il risparmio di tempo e stress</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-[#F5E5E5] rounded-full mt-2 flex-shrink-0"></div>
                                <span>Menziona la valorizzazione dell'immobile</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-medium mb-4">Informazioni da Raccogliere:</h4>
                        <ul className="space-y-3 text-white text-opacity-80 font-light">
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Tipologia e dimensioni dell'immobile</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Zona e caratteristiche del quartiere</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span>Stato attuale di utilizzo/affitto</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}