import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import TrackRecord from './components/TrackRecord';
import Projects from './components/Projects';
import Clients from './components/Clients';
import Presence from './components/Presence';
import VisionGoals from './components/VisionGoals';
import WhyBedaya from './components/WhyBedaya';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppModal from './components/WhatsAppModal';

export default function App() {
  const [lang, setLang] = useState('ar'); // Default to Arabic as requested for Gulf brand
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [prefilledMessage, setPrefilledMessage] = useState('');

  // Dynamically update document direction (RTL / LTR) and language tag
  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const handleOpenWhatsApp = (message = '') => {
    setPrefilledMessage(message);
    setIsWhatsAppOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#0B0C0E] text-[#EFECE6] font-sans selection:bg-[#C5A059] selection:text-[#0B0C0E]">
      
      {/* Sticky Glass Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          lang={lang}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        <About
          lang={lang}
        />

        <Expertise
          lang={lang}
        />

        <TrackRecord
          lang={lang}
        />

        <Projects
          lang={lang}
          onOpenWhatsApp={handleOpenWhatsApp}
        />

        <Clients
          lang={lang}
        />

        <Presence
          lang={lang}
        />

        <VisionGoals
          lang={lang}
        />

        <WhyBedaya
          lang={lang}
        />

        <Contact
          lang={lang}
          onOpenWhatsApp={handleOpenWhatsApp}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        setLang={setLang}
        onOpenWhatsApp={handleOpenWhatsApp}
      />

      {/* Central 4-Number WhatsApp Modal System */}
      <WhatsAppModal
        isOpen={isWhatsAppOpen}
        onClose={() => setIsWhatsAppOpen(false)}
        prefilledMessage={prefilledMessage}
        lang={lang}
      />

    </div>
  );
}
