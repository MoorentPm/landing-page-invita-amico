import React, { useState, useEffect, useRef } from "react";
import { Home, Euro, Users, Mail, Heart } from "lucide-react"; // Rimosso 'Download'

const navigationItems = {
    Career: [
        { title: "Home", id: "hero", icon: Home },
        { title: "Processo", id: "process", icon: Users },
        { title: "Benefici", id: "benefits", icon: Euro },
        { title: "Requisiti", id: "requirements", icon: Heart },
        { title: "Contatti", id: "contact", icon: Mail },
    ]
};

export default function Layout({ children, currentPageName }) {
    const [activeSection, setActiveSection] = useState('hero');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const visibleSection = entries.find((entry) => entry.isIntersecting)?.target;
            if (visibleSection) {
                setActiveSection(visibleSection.id);
            }
        }, {
            threshold: 0.3,
            rootMargin: "-30% 0px -30% 0px"
        });

        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        return () => {
            sections.forEach((section) => observer.unobserve(section));
        };
    }, [children, currentPageName]);

    // La funzione handlePrint è stata rimossa

    const currentNavItems = navigationItems[currentPageName] || navigationItems.Career;

    return (
        <div className="relative min-h-screen bg-black text-white font-sans print:bg-white print:text-black">
            <div className="fixed inset-0 z-0 print:hidden">
                <iframe
                    src="https://my.spline.design/thresholddarkambientui-v0gkZCfi6zXm69kE0wccy70f/"
                    frameBorder="0"
                    width="100%"
                    height="100%"
                    className="w-full h-full"
                    loading="lazy"
                    title="3D Background"
                ></iframe>
            </div>

            <aside className="fixed inset-y-0 left-0 flex flex-col gap-3 sm:gap-4 py-6 px-3 items-center bg-transparent z-50 print:hidden">
                {currentNavItems.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                        <a
                            key={item.title}
                            href={`#${item.id}`}
                            title={item.title}
                            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-150 ${isActive ? 'bg-white text-black scale-105 shadow-md' : 'bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-10 hover:bg-opacity-20 hover:scale-105 text-white'}`}
                        >
                            <item.icon className="w-4 h-4" />
                        </a>
                    );
                })}
                {/* Il bottone per la stampa è stato rimosso da qui */}
            </aside>
            
            <main className="relative z-10 flex flex-col items-center justify-center w-full px-4 sm:pl-20 md:pl-24 lg:pl-28 print:pl-0 print:px-8">
                {children}
            </main>
        </div>
    );
}

