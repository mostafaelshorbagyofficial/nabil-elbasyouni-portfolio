import React from 'react';
import { Award, CheckCircle2, Quote, ShieldCheck, Factory, Globe2, Layers, Cpu, UserCheck } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import { IMAGES_CONFIG } from '../data/images';

export default function About({ lang }) {
  const t = TRANSLATIONS[lang].about;

  const highlightIcons = [Factory, Globe2, Layers, Cpu, UserCheck];

  return (
    <section id="about" className="py-24 bg-theme-main relative overflow-hidden border-t border-[#C5A059]/15">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] text-xs font-extrabold uppercase tracking-widest">
            {t.sectionTitle}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-theme-title tracking-tight">
            {t.name}
          </h2>
          <p className="text-sm font-bold text-[#C5A059]">
            {t.position} — {t.company}
          </p>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-4" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-sm">
              <div className="rounded-2xl bg-theme-card border border-[#C5A059]/30 p-4 shadow-xl">
                <div className="h-96 rounded-xl overflow-hidden relative bg-black">
                  <img
                    src={IMAGES_CONFIG.aboutPhoto}
                    alt={t.name}
                    className="w-full h-full object-cover object-top filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
                </div>

                {/* Quote Box */}
                <div className="mt-4 p-3 rounded-xl bg-theme-placeholder border border-[#C5A059]/20 text-center">
                  <Quote className="w-4 h-4 text-[#C5A059] mx-auto mb-1 opacity-70" />
                  <p className="text-xs font-serif italic text-theme-title">
                    "{t.quote}"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Biography & Professional Highlights Column */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Bio Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-theme-card border border-[#C5A059]/25 space-y-4 border-l-4 border-l-[#C5A059] rtl:border-l-0 rtl:border-r-4 rtl:border-r-[#C5A059] shadow-lg">
              <h3 className="text-xl font-bold text-theme-title tracking-wide flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#C5A059]" />
                {lang === 'ar' ? 'السيرة المهنية' : 'Professional Biography'}
              </h3>
              <p className="text-base sm:text-lg text-theme-sub leading-relaxed">
                {t.bio}
              </p>
            </div>

            {/* Professional Profile Highlights (Replacing Personal CV Details) */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                {t.highlightsTitle}
              </h4>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-5 gap-3">
                {t.highlights.map((item, index) => {
                  const Icon = highlightIcons[index % highlightIcons.length];
                  return (
                    <div
                      key={index}
                      className="p-3.5 rounded-xl bg-theme-card border border-[#C5A059]/20 hover:border-[#C5A059] transition-all text-center group shadow-sm"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black flex items-center justify-center mx-auto mb-2 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-base font-extrabold text-gold-gradient font-mono">
                        {item.label}
                      </div>
                      <p className="text-[11px] font-semibold text-theme-sub mt-0.5">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
