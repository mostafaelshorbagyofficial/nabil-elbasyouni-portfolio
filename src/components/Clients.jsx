import React from 'react';
import { CLIENTS_LIST, TRANSLATIONS } from '../data/translations';
import { Building2 } from 'lucide-react';

export default function Clients({ lang }) {
  const t = TRANSLATIONS[lang].clients;

  return (
    <section id="clients" className="py-20 bg-theme-main border-t border-[#C5A059]/15 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] text-xs font-extrabold uppercase tracking-widest">
            {t.sectionTitle}
          </div>
          <h2 className="text-3xl font-extrabold text-theme-title tracking-tight">
            {t.subtitle}
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-3" />
        </div>

        {/* Client Badges Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {CLIENTS_LIST.map((client, index) => (
            <div
              key={index}
              className="group p-5 rounded-xl bg-theme-card border border-[#C5A059]/20 hover:border-[#C5A059] transition-all text-center flex flex-col items-center justify-center space-y-2 shadow-sm hover:-translate-y-1"
            >
              <div className="w-10 h-10 rounded-lg bg-theme-placeholder border border-[#C5A059]/30 text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-black flex items-center justify-center transition-colors">
                <Building2 className="w-5 h-5 stroke-[1.5]" />
              </div>

              <h3 className="text-xs font-bold text-theme-title group-hover:text-[#C5A059] transition-colors leading-tight">
                {lang === 'ar' ? client.nameAr : client.nameEn}
              </h3>

              <p className="text-[10px] text-theme-sub font-mono">
                {client.details}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
