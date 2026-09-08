import React from 'react';
import { TRANSLATIONS } from '../data/translations';

// Thin-line custom SVG icons matching unified gold aesthetic
const IconDesign = () => (
  <svg className="w-8 h-8 text-[#C5A059]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18" />
    <path d="M9 21V9" />
    <circle cx="15" cy="15" r="2" />
  </svg>
);

const IconSupply = () => (
  <svg className="w-8 h-8 text-[#C5A059]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const IconErection = () => (
  <svg className="w-8 h-8 text-[#C5A059]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

const IconCommissioning = () => (
  <svg className="w-8 h-8 text-[#C5A059]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
    <path d="M16 12a4 4 0 1 0-8 0" />
  </svg>
);

const IconTOT = () => (
  <svg className="w-8 h-8 text-[#C5A059]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
    <path d="M7 9l3 3 7-7" />
  </svg>
);

const IconMaintenance = () => (
  <svg className="w-8 h-8 text-[#C5A059]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const iconsMap = [IconDesign, IconSupply, IconErection, IconCommissioning, IconTOT, IconMaintenance];

export default function Expertise({ lang }) {
  const t = TRANSLATIONS[lang].expertise;

  return (
    <section id="expertise" className="py-24 bg-[#0B0C0E] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#E5C158] text-xs font-bold uppercase tracking-widest">
            {t.sectionTitle}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.subtitle}
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-4" />
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((item, index) => {
            const IconComponent = iconsMap[index];
            return (
              <div
                key={item.id}
                className="group relative glass-card p-8 rounded-2xl border border-[#C5A059]/20 hover:border-[#C5A059] transition-all duration-300 hover:-translate-y-1.5 shadow-lg flex flex-col justify-between"
              >
                {/* Number Badge */}
                <div className="absolute top-6 right-6 rtl:right-auto rtl:left-6 text-2xl font-mono font-bold text-[#C5A059]/20 group-hover:text-[#C5A059]/40 transition-colors">
                  0{item.id}
                </div>

                <div className="space-y-4">
                  {/* Thin Gold Icon Container */}
                  <div className="w-14 h-14 rounded-xl bg-[#14161C] border border-[#C5A059]/30 group-hover:border-[#C5A059] group-hover:bg-[#C5A059]/10 flex items-center justify-center transition-all duration-300 shadow-md">
                    <IconComponent />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#E5C158] transition-colors">
                    {item.title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Gold Line */}
                <div className="w-0 group-hover:w-full h-0.5 bg-gold-gradient transition-all duration-500 rounded-full mt-6" />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
