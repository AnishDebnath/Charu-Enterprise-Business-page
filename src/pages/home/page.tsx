import React from 'react';
import { Hero } from '../../components/home/Hero';
import { TrustSection } from '../../components/home/TrustSection';
import { WhyChooseUs } from '../../components/home/WhyChooseUs';
import { ContactSection } from '../../components/home/ContactSection';
import { LandingOption } from '../../../types';

interface HomePageProps {
    currentOption: LandingOption;
    onContactClick: () => void;
    onAboutClick: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ currentOption, onContactClick, onAboutClick }) => {
    return (
        <>
            <Hero onCtaClick={onContactClick} onAboutClick={onAboutClick} />
            <TrustSection />
            <WhyChooseUs onContactClick={onContactClick} />
            <ContactSection currentOption={currentOption} />
        </>
    );
};
