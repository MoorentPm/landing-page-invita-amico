import React from 'react';
import { Share2, Send, Phone, Banknote, CheckCircle2 } from 'lucide-react';

const StepCard = React.memo(({ step, title, description, icon: Icon, details, index }) => (
    <div className="relative group">
        <div className="glass-card rounded-2xl p-8 hover:bg-black hover:bg-opacity-20 transition-all duration-500 hover:scale-105 h-full"
            style={{ animationDelay: `${index * 150}ms` }}>
            
            {/* Step Number Badge */}
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gradient-to-br from-[#F5E5E5] to-[#E0D0D0] border-4 border-black flex items-center justify-center z-10">
                <span className="text-black font-bold text-lg">{step}</span>
            </div>

            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-white bg-opacity-10 border border-white border-opacity-20 flex items-center justify-center mb-6 group-hover:bg-opacity-20 transition-all duration-300">
                <Icon className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-[#F5E5E5] transition-colors duration-300">{title}</h3>
            <p className="text-white text-opacity-80 font-light leading-relaxed mb-6">{description}</p>
            
            {details && (
                <div className="space-y-3 pt-4 border-t border-white border-opacity-10">
                    {details.map((detail, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-[#F5E5E5] mt-0.5 flex-shrink-0" />
                            <span className="text-white text-opacity-70 text-sm font-light">{detail}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
        
        {/* Connection Line */}
        {index < 3 && (
            <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-white bg-opacity-30 transform -translate-y-1/2 z-0"></div>
        )}
    </div>
));

export default function ProcessSection() {
    const steps = [
        {
            step: 1,
            title: "Condividi i Servizi",
            description: "Parla di Moorent PM a proprietari che potrebbero beneficiare dei nostri servizi premium.",
            icon: Share2,
            details: [
                "Proprietari con poco tempo per gestione diretta",
                "Immobili in zone centrali o strategiche", 
                "Proprietà sottoutilizzate o affittate tradizionalmente"
            ]
        },
        {
            step: 2,
            title: "Presenta il Contatto",
            description: "Invia email con dati del proprietario e descrizione immobile, con consenso al contatto.",
            icon: Send,
            details: [
                "Email: hello@moorentpm.it",
                "Dati: nome, telefono, email proprietario",
                "Descrizione breve dell'immobile",
                "Conferma del consenso"
            ]
        },
        {
            step: 3,
            title: "Gestione Professionale", 
            description: "Il team contatta il proprietario entro 48 ore per presentazione servizi e valutazione.",
            icon: Phone,
            details: [
                "Contatto entro 48 ore garantito",
                "Presentazione servizi premium",
                "Valutazione immobile gratuita",
                "Approccio senza pressioni"
            ]
        },
        {
            step: 4,
            title: "Premio Garantito",
            description: "€500 di premio tramite bonifico entro 30 giorni dalla firma del contratto.",
            icon: Banknote,
            details: [
                "€500 per ogni contratto firmato",
                "Bonifico bancario entro 30 giorni",
                "Pagamento dopo attivazione servizio",
                "Nessun limite al numero di referral"
            ]
        }
    ];

    return (
        <section id="process" className="fade-in">
            <div className="text-center mb-16">
                <h2 className="text-sm font-light text-white text-opacity-70 mb-3 uppercase tracking-widest">Processo</h2>
                <p className="text-4xl md:text-5xl font-extralight text-white tracking-tight">Come Funziona</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                {steps.map((step, index) => (
                    <StepCard 
                        key={index}
                        index={index}
                        step={step.step}
                        title={step.title}
                        description={step.description}
                        icon={step.icon}
                        details={step.details}
                    />
                ))}
            </div>
        </section>
    );
}