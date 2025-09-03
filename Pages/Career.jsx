import React from 'react';

import HeroSection from '@/components/moorent/HeroSection';
import ProcessSection from '@/components/moorent/ProcessSection';
import BenefitsSection from '@/components/moorent/BenefitsSection';
import RequirementsSection from '@/components/moorent/RequirementsSection';
import ContactSection from '@/components/moorent/ContactSection';

export default function CareerPage() {
    return (
        <div className="w-full max-w-7xl pt-20 pb-24 space-y-32 md:space-y-48">
            <HeroSection />
            <ProcessSection />
            <BenefitsSection />
            <RequirementsSection />
            <ContactSection />
        </div>
    );
}