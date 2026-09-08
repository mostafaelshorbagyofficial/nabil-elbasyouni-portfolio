import React from 'react';
import { ArrowDown, MessageSquare, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import { IMAGES_CONFIG } from '../data/images';

export default function Hero({ lang, onOpenWhatsApp }) {
  const t = TRANSLATIONS[lang].hero;

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-blueprint-pattern bg-theme-main">
      
      {/* Soft Ambient Radial Gold Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#C5A059]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Personal Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left rtl:lg:text-right">
            
            {/* Executive Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-theme-card border border-[#C5A059]/40 text-[#C5A059] text-xs font-extrabold tracking-widest uppercase shadow-sm">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span>{t.eyebrow}</span>
            </div>

            {/* Main Personal Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold tracking-tight text-theme-title leading-tight">
                <span className="block text-gold-gradient font-serif">{t.name}</span>
              </h1>
              <h2 className="text-xl sm:text-2xl font-bold text-[#C5A059] tracking-wide">
                {t.title} — <span className="font-semibold text-theme-sub">{t.subtitle}</span>
              </h2>
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-theme-sub max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {t.desc}
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              
              <button
                onClick={() => onOpenWhatsApp()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gold-gradient hover:bg-gold-gradient-hover text-[#0B0C0E] font-bold text-xs tracking-wider uppercase shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>{t.contactBtn}</span>
              </button>

              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-theme-card border-2 border-[#C5A059]/40 text-theme-title hover:border-[#C5A059] hover:text-[#C5A059] font-bold text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>{t.exploreBtn}</span>
                <ArrowDown className="w-4 h-4 text-[#C5A059]" />
              </button>

            </div>

            {/* Bottom Trust Note */}
            <p className="text-xs text-theme-sub font-mono tracking-wide pt-2">
              {t.badgeText}
            </p>

          </div>

          {/* Authentic Portrait Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Decorative Gold Glow */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#8C6D2B] via-[#C5A059] to-[#E1C16E] opacity-20 blur-md" />
              
              {/* Card Frame */}
              <div className="relative rounded-2xl bg-theme-card border border-[#C5A059]/40 p-3 shadow-2xl overflow-hidden group">
                
                <div className="relative h-[440px] sm:h-[480px] w-full rounded-xl overflow-hidden bg-black">
                  <img
                    src={IMAGES_CONFIG.portrait}
                    alt={t.name}
                    className="w-full h-full object-cover object-top filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-90" />
                </div>

                {/* Overlaid Personal Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-theme-main/90 border border-[#C5A059]/40 backdrop-blur-md shadow-xl text-center">
                  <h3 className="text-base font-bold text-theme-title tracking-wide">
                    {t.name}
                  </h3>
                  <p className="text-xs font-semibold text-[#C5A059] uppercase tracking-widest mt-0.5">
                    {lang === 'ar' ? 'المدير العام' : 'General Manager'}
                  </p>
                  <p className="text-[10px] text-theme-sub mt-0.5">
                    {lang === 'ar' ? 'شركة بداية لإنشاء مصانع الأعلاف' : 'Bedaya Company for Feed Mills Construction'}
                  </p>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
