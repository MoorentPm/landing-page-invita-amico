import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2, AlertTriangle } from 'lucide-react';

export default function ContactSection() {
    const [formData, setFormData] = useState({
        referrerName: '',
        referrerEmail: '',
        ownerName: '',
        ownerPhone: '',
        ownerEmail: '',
        propertyDescription: '',
        consent: false
    });
    // Stato migliorato per gestire invio, successo ed errore
    const [status, setStatus] = useState('idle'); // 'idle', 'sending', 'success', 'error'

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        // === INCOLLA QUI IL TUO URL DI APPS SCRIPT! ===
        const scriptURL = 'https://script.google.com/macros/s/AKfycbwMuNTeOdh22_GXGeC4A6tcTvnrRqpQg0UcKudocsgsYUP9IQOcgK-W3kfaUai3NXYz/exec';
        
        const formBody = new FormData();
        for (const key in formData) {
            formBody.append(key, formData[key]);
        }

        try {
            const response = await fetch(scriptURL, { method: 'POST', body: formBody });
            const result = await response.json();

            if (result.result === 'success') {
                setStatus('success');
                // Resetta il modulo e lo stato dopo 3 secondi
                setTimeout(() => {
                    setFormData({
                        referrerName: '', referrerEmail: '', ownerName: '', ownerPhone: '',
                        ownerEmail: '', propertyDescription: '', consent: false
                    });
                    setStatus('idle');
                }, 3000);
            } else {
                throw new Error(result.error || 'Errore sconosciuto da Google Script');
            }
        } catch (error) {
            console.error('Error!', error.message);
            setStatus('error');
             // Permette all'utente di riprovare dopo 3 secondi
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    // La tua bellissima schermata di successo!
    if (status === 'success') {
        return (
            <section id="contact" className="fade-in">
                <div className="text-center">
                    <div className="glass-card rounded-3xl p-16 text-center border border-[#F5E5E5] border-opacity-30 bg-gradient-to-r from-[#F5E5E5]/20 to-transparent">
                        <div className="w-20 h-20 rounded-full bg-[#F5E5E5] bg-opacity-20 border-2 border-[#F5E5E5] flex items-center justify-center mx-auto mb-8">
                            <CheckCircle className="w-10 h-10 text-[#F5E5E5]" />
                        </div>
                        <h2 className="text-3xl font-light text-white mb-4">Referral Inviato!</h2>
                        <p className="text-white text-opacity-80 font-light text-lg">
                            Grazie per la tua segnalazione. Contatteremo il proprietario entro 48 ore.
                        </p>
                    </div>
                </div>
            </section>
        );
    }

    // Il tuo modulo originale, con un bottone dinamico
    return (
        <section id="contact" className="fade-in">
            <div className="text-center mb-16">
                <h2 className="text-sm font-light text-white text-opacity-70 mb-3 uppercase tracking-widest">Inizia Ora</h2>
                <p className="text-4xl md:text-5xl font-extralight text-white tracking-tight">Presenta un Contatto</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="glass-card rounded-3xl p-8">
                    <h3 className="text-2xl font-light text-white mb-8 text-center">Modulo Referral</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                         {/* ... tutti i tuoi campi input restano identici ... */}
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-white text-opacity-80 font-light mb-2">Il tuo nome</label>
                                <input type="text" name="referrerName" value={formData.referrerName} onChange={handleInputChange} className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:border-opacity-40 transition-all" placeholder="Nome e cognome" required />
                            </div>
                            <div>
                                <label className="block text-white text-opacity-80 font-light mb-2">La tua email</label>
                                <input type="email" name="referrerEmail" value={formData.referrerEmail} onChange={handleInputChange} className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:border-opacity-40 transition-all" placeholder="tua@email.com" required />
                            </div>
                        </div>
                        <hr className="border-white border-opacity-20" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                           <div>
                                <label className="block text-white text-opacity-80 font-light mb-2">Nome proprietario</label>
                                <input type="text" name="ownerName" value={formData.ownerName} onChange={handleInputChange} className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:border-opacity-40 transition-all" placeholder="Nome proprietario" required />
                            </div>
                            <div>
                                <label className="block text-white text-opacity-80 font-light mb-2">Telefono</label>
                                <input type="tel" name="ownerPhone" value={formData.ownerPhone} onChange={handleInputChange} className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:border-opacity-40 transition-all" placeholder="+39 xxx xxx xxxx" required />
                            </div>
                            <div>
                                <label className="block text-white text-opacity-80 font-light mb-2">Email proprietario</label>
                                <input type="email" name="ownerEmail" value={formData.ownerEmail} onChange={handleInputChange} className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:border-opacity-40 transition-all" placeholder="proprietario@email.com" required />
                            </div>
                        </div>
                        <div>
                            <label className="block text-white text-opacity-80 font-light mb-2">Descrizione immobile</label>
                            <textarea name="propertyDescription" value={formData.propertyDescription} onChange={handleInputChange} rows={4} className="w-full px-4 py-3 bg-white bg-opacity-10 border border-white border-opacity-20 rounded-xl text-white placeholder-white placeholder-opacity-50 focus:outline-none focus:border-opacity-40 transition-all resize-none" placeholder="Descrivi brevemente l'immobile: zona, tipologia, stato attuale, caratteristiche principali..." required />
                        </div>
                        <div className="flex items-start gap-3">
                            <input type="checkbox" name="consent" checked={formData.consent} onChange={handleInputChange} className="mt-1" required />
                            <label className="text-white text-opacity-80 font-light text-sm">
                                Confermo di avere il consenso esplicito del proprietario a condividere i suoi dati con Moorent PM per essere contattato.
                            </label>
                        </div>
                        {/* Bottone dinamico */}
                        <button type="submit" disabled={status === 'sending'} className="w-full px-8 py-4 bg-[#F5E5E5] hover:bg-[#E0D0D0] text-black font-medium rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed">
                            {status === 'sending' && <><Loader2 className="w-5 h-5 animate-spin" /> Invio in corso...</>}
                            {status === 'error' && <><AlertTriangle className="w-5 h-5" /> Errore, riprova</>}
                            {status === 'idle' && <><Send className="w-5 h-5" /> Invia Referral</>}
                        </button>
                    </form>
                </div>

                 {/* ... la tua sezione Contatti Diretti resta identica ... */}
                 <div className="space-y-8">
                    <div className="glass-card rounded-3xl p-8 text-center">
                        <h3 className="text-2xl font-light text-white mb-8">Contatti Diretti</h3>
                        <div className="space-y-6">
                            <div className="flex items-center justify-center gap-4">
                                <Mail className="w-6 h-6 text-blue-400" />
                                <span className="text-white text-opacity-90 font-light text-lg">hello@moorentpm.it</span>
                            </div>
                            <div className="flex items-center justify-center gap-4">
                                <Phone className="w-6 h-6 text-[#F5E5E5]" />
                                <span className="text-white text-opacity-90 font-light text-lg">+39 353 483 0386</span>
                            </div>
                            <div className="flex items-center justify-center gap-4">
                                <MapPin className="w-6 h-6 text-purple-400" />
                                <span className="text-white text-opacity-90 font-light text-lg">Italia</span>
                            </div>
                        </div>
                    </div>
                    <div className="glass-card rounded-2xl p-8 border-l-4 border-blue-400">
                        <h4 className="text-lg font-medium text-white mb-4">Hai Domande?</h4>
                        <p className="text-white text-opacity-80 font-light leading-relaxed mb-6">
                            Il nostro team è disponibile per chiarire qualsiasi dubbio sul programma referral 
                            e per fornire maggiori informazioni sui nostri servizi di gestione immobiliare premium.
                        </p>
                        <a href="https://wa.me/393534830386" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-xl transition-all duration-300 hover:scale-105">
                            Contatta il Team
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

