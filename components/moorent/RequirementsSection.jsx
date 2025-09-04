import React from 'react';
import { AlertCircle, UserCheck, FileCheck, Clock, Infinity } from 'lucide-react';

const RequirementCard = React.memo(({ title, description, icon: Icon, type, index }) => {
    const cardColor = type === 'requirement' ? 'border-yellow-400' : 'border-blue-400';
    const iconColor = type === 'requirement' ? 'text-yellow-400' : 'text-blue-400';
    const bgColor = type === 'requirement' ? 'bg-yellow-500' : 'bg-blue-500';

    return (
        <div className={`glass-card rounded-xl p-6 border-l-4 ${cardColor} hover:bg-black hover:bg-opacity-20 transition-all duration-300 hover:scale-105 h-full`}
            style={{ animationDelay: `${index * 100}ms` }}>
            <div className={`w-12 h-12 rounded-xl ${bgColor} bg-opacity-20 border border-opacity-30 flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${iconColor}`} />
            </div>
            <h4 className="text-white font-medium mb-3">{title}</h4>
            <p className="text-white text-opacity-80 font-light leading-relaxed">{description}</p>
        </div>
    );
});

export default function RequirementsSection() {
    const requirements = [
        {
            title: "Contatto Nuovo",
            description: "Il contatto deve essere nuovo per Moorent PM, non già presente nel nostro database clienti.",
            icon: UserCheck,
            type: 'requirement'
        },
        {
            title: "Contratto Firmato",
            description: "Il bonus viene corrisposto solo dopo la firma del contratto e l'attivazione del servizio di gestione.",
            icon: FileCheck,
            type: 'requirement'
        },
        {
            title: "Tempistiche Pagamento",
            description: "Il premio di €370 viene trasferito tramite bonifico bancario entro 30 giorni dall'attivazione.",
            icon: Clock,
            type: 'requirement'
        }
    ];

    const conditions = [
        {
            title: "Nessun Limite",
            description: "Non c'è limite al numero di contatti che puoi presentare. Ogni contratto firmato vale €370.",
            icon: Infinity,
            type: 'condition'
        },
        {
            title: "Aperto a Tutti",
            description: "Il programma è valido per chiunque: clienti esistenti, partner commerciali o semplicemente amici di Moorent PM.",
            icon: AlertCircle,
            type: 'condition'
        }
    ];

    return (
        <section id="requirements" className="fade-in">
            <div className="text-center mb-16">
                <h2 className="text-sm font-light text-white text-opacity-70 mb-3 uppercase tracking-widest">Regolamento</h2>
                <p className="text-4xl md:text-5xl font-extralight text-white tracking-tight">Requisiti e Condizioni</p>
            </div>

            <div className="space-y-12">
                {/* Requirements */}
                <div>
                    <h3 className="text-2xl font-light text-white mb-8 text-center">Requisiti Essenziali</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {requirements.map((req, index) => (
                            <RequirementCard 
                                key={index}
                                index={index}
                                title={req.title}
                                description={req.description}
                                icon={req.icon}
                                type={req.type}
                            />
                        ))}
                    </div>
                </div>

                {/* Conditions */}
                <div>
                    <h3 className="text-2xl font-light text-white mb-8 text-center">Condizioni Aggiuntive</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {conditions.map((condition, index) => (
                            <RequirementCard 
                                key={index}
                                index={index + requirements.length}
                                title={condition.title}
                                description={condition.description}
                                icon={condition.icon}
                                type={condition.type}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Important Note */}
            <div className="glass-card rounded-2xl p-8 bg-gradient-to-r from-[#F5E5E5]/20 to-transparent border border-[#F5E5E5] border-opacity-30 text-center">
                <h4 className="text-xl font-medium text-white mb-4">Importante da Ricordare</h4>
                <p className="text-white text-opacity-90 font-light leading-relaxed text-lg max-w-3xl mx-auto">
                    Assicurati sempre di avere il consenso esplicito del proprietario prima di condividere i suoi dati. 
                    La fiducia è la base del nostro programma e va sempre rispettata.
                </p>
            </div>
        </section>
    );
}
