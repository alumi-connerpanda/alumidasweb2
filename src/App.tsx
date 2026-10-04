import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Services from './components/Services';
import DesignToReality from './components/DesignToReality';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ContactModal from './components/QuoteModal';

export default function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState<string | undefined>(undefined);

  const handleOpenContact = (customTitle?: string) => {
    setModalTitle(customTitle);
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-construction-lines text-[#1E293B] flex flex-col font-sans">
      {/* Navigation Bar (Top Bar Contract: 3 Zones) */}
      <Navbar onOpenQuote={() => handleOpenContact('Get a Quote - Contact Details')} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenQuote={() => handleOpenContact('Get a Quote - Contact Details')} />

        {/* 2. Introduction & Company Overview */}
        <Overview />

        {/* 3. Services: 6-Card Grid with Pop-up Modal + Aluminium Finish Options */}
        <Services onOpenQuote={(service) => handleOpenContact(service ? `Inquire About ${service}` : undefined)} />

        {/* 4. Design-to-Reality Section */}
        <DesignToReality onOpenQuote={() => handleOpenContact('Discuss Your Architectural Drawing')} />

        {/* 5. Our Work Gallery: Card Grid with Pop-up Modal & Highlighted Facebook Preview */}
        <Gallery onOpenQuote={() => handleOpenContact('Project Inquiry - Contact Details')} />

        {/* 6. Why Choose ALU MIDAS (8 Key Strengths) */}
        <WhyChooseUs />

        {/* 7. About ALU MIDAS (25+ Years, Homagama) */}
        <About />

        {/* 8. Contact & Location Details */}
        <ContactSection onOpenContactModal={() => handleOpenContact()} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Contact Details Pop-up Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        title={modalTitle || 'Get in Touch with ALU MIDAS'}
      />
    </div>
  );
}
