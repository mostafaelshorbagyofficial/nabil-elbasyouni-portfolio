import React, { useState, useEffect } from 'react';
import { Menu, X, MessageSquare, Globe, Sun, Moon } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function Navbar({ lang, setLang, theme, setTheme, onOpenWhatsApp }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: t.home },
    { id: 'about', label: t.about },
    { id: 'expertise', label: t.expertise },
    { id: 'projects', label: t.projects },
    { id: 'clients', label: t.clients },
    { id: 'vision', label: t.vision },
    { id: 'contact', label: t.contact },
  ];

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
      scrolled 
        ? 'py-3 border-b border-[#C5A059]/25 shadow-xl bg-theme-main/90 backdrop-blur-md' 
        : 'bg-gradient-to-b from-black/80 to-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Personal Brand Logo: NEB Monogram + Nabil El-Basyouni */}
        <div 
          onClick={() => scrollToSection('hero')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* NEB Gold Monogram */}
          <div className="w-10 h-10 rounded-lg bg-gold-gradient p-0.5 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-theme-main rounded-[7px] flex items-center justify-center">
              <span className="font-serif text-sm font-bold text-[#E1C16E] tracking-wider">
                {t.brandShort}
              </span>
            </div>
          </div>

          {/* Name & Title Hierarchy */}
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-extrabold tracking-wide text-theme-title group-hover:text-[#E1C16E] transition-colors">
              {t.brand}
            </span>
            <span className="text-[10px] text-[#C5A059] font-semibold tracking-wider uppercase hidden sm:inline-block">
              {t.position} • {t.company}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-7">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-xs font-semibold text-theme-sub hover:text-[#C5A059] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Actions: Theme Toggle + Language Switch + Primary CTA */}
        <div className="hidden lg:flex items-center gap-3">
          
          {/* Minimal Theme Switcher */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-[#C5A059]/30 text-theme-sub hover:text-[#C5A059] hover:border-[#C5A059] bg-theme-card transition-colors"
            title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#E1C16E]" />
            ) : (
              <Moon className="w-4 h-4 text-[#C5A059]" />
            )}
          </button>

          {/* Language Switch */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[#C5A059]/30 text-xs font-bold text-theme-title hover:border-[#C5A059] hover:text-[#E1C16E] bg-theme-card transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>{t.langSwitch}</span>
          </button>

          {/* Primary CTA */}
          <button
            onClick={() => onOpenWhatsApp()}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gold-gradient hover:bg-gold-gradient-hover text-[#0B0C0E] font-bold text-xs tracking-wider uppercase shadow-md hover:scale-[1.02] transition-transform"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>{t.cta}</span>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-[#C5A059]/30 text-theme-title bg-theme-card"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-[#E1C16E]" /> : <Moon className="w-4 h-4 text-[#C5A059]" />}
          </button>

          {/* Language Switch */}
          <button
            onClick={toggleLang}
            className="px-2.5 py-1.5 rounded-lg border border-[#C5A059]/30 text-xs font-bold text-[#E1C16E] bg-theme-card"
          >
            {t.langSwitch}
          </button>

          {/* Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-theme-title rounded-lg bg-theme-card border border-[#C5A059]/30"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#C5A059]" /> : <Menu className="w-5 h-5 text-[#C5A059]" />}
          </button>
        </div>

      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-theme-main/95 border-b border-[#C5A059]/30 backdrop-blur-xl px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="block w-full text-left rtl:text-right py-2.5 px-3 rounded-lg text-sm font-semibold text-theme-title hover:bg-[#C5A059]/10 hover:text-[#C5A059] transition-colors"
            >
              {link.label}
            </button>
          ))}

          <div className="pt-2 border-t border-[#C5A059]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenWhatsApp();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-gold-gradient font-bold text-xs text-[#0B0C0E] tracking-wider uppercase shadow-lg"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>{t.cta}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
