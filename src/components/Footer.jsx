import React from 'react';
import { MessageSquare, Globe, ArrowUp } from 'lucide-react';
import { TRANSLATIONS, WHATSAPP_NUMBERS } from '../data/translations';

export default function Footer({ lang, setLang, onOpenWhatsApp }) {
  const t = TRANSLATIONS[lang];
  const isRtl = lang === 'ar';

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07080A] text-gray-400 border-t border-[#C5A059]/20 pt-16 pb-12 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Top Branding & Main Action Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-12 border-b border-white/5">
          
          {/* Logo & Company Title */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gold-gradient p-0.5 flex items-center justify-center">
                <div className="w-full h-full bg-[#0B0C0E] rounded-[7px] flex items-center justify-center">
                  <span className="font-serif text-lg font-bold text-[#E5C158]">B</span>
                </div>
              </div>
              <span className="text-2xl font-extrabold text-white tracking-widest">
                {t.nav.brand}
              </span>
            </div>
            <p className="text-sm font-semibold text-[#C5A059]">
              {t.nav.companyFullName}
            </p>
            <p className="text-xs text-gray-500 max-w-md">
              {t.hero.tag}
            </p>
          </div>

          {/* Quick Actions (Language & WhatsApp CTA) */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-4">
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#C5A059]/30 text-xs font-semibold text-gray-200 hover:border-[#C5A059] hover:text-[#E5C158] bg-[#14161C] transition-colors"
            >
              <Globe className="w-4 h-4 text-[#C5A059]" />
              <span>{t.nav.langSwitch}</span>
            </button>

            <button
              onClick={() => onOpenWhatsApp()}
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg bg-gold-gradient hover:bg-gold-gradient-hover text-[#0B0C0E] font-bold text-xs tracking-wider uppercase shadow-lg transition-transform hover:scale-105"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>{t.nav.cta}</span>
            </button>
          </div>

        </div>

        {/* Links & Contact Info Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-white/5 text-sm">
          
          {/* Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              {lang === 'ar' ? 'التنقل السريع' : 'Navigation'}
            </h4>
            <ul className="space-y-2">
              {['hero', 'about', 'expertise', 'projects', 'clients', 'vision', 'contact'].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => scrollToSection(id)}
                    className="hover:text-[#E5C158] transition-colors"
                  >
                    {t.nav[id === 'hero' ? 'home' : id]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Email Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              {t.contact.emailTitle}
            </h4>
            <ul className="space-y-2 font-mono text-xs">
              <li>
                <a href="mailto:Nabil_elmasry62@yahoo.com" className="hover:text-[#E5C158]">
                  Nabil_elmasry62@yahoo.com
                </a>
              </li>
              <li>
                <a href="mailto:Ahmedz_hegazy33@yahoo.com" className="hover:text-[#E5C158]">
                  Ahmedz_hegazy33@yahoo.com
                </a>
              </li>
            </ul>
          </div>

          {/* Direct WhatsApp Lines */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              {t.contact.phoneTitle}
            </h4>
            <ul className="space-y-1.5 font-mono text-xs">
              {WHATSAPP_NUMBERS.map((n) => (
                <li key={n.id}>
                  <button onClick={() => onOpenWhatsApp()} className="hover:text-[#E5C158] block dir-ltr">
                    {n.displayNumber} ({n.country})
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Address & Operational Base */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
              {t.contact.addressTitle}
            </h4>
            <p className="text-xs text-gray-300 leading-relaxed">
              {t.contact.address}
            </p>
            <p className="text-[11px] text-[#C5A059] font-semibold pt-1">
              Egypt • Sultanate of Oman
            </p>
          </div>

        </div>

        {/* Bottom Tagline, Copyright & Back to top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            <p className="font-serif italic text-sm text-[#E5C158] font-semibold">
              {t.footer.tagline}
            </p>
            <p className="text-gray-500 mt-0.5">
              {t.footer.copyright}
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-[#14161C] border border-[#C5A059]/30 text-[#C5A059] hover:text-white hover:bg-[#C5A059]/20 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
