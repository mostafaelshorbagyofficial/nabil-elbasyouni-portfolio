import React from 'react';
import { ShieldCheck, MapPin, Layers, Settings, Award } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

const iconsMap = [ShieldCheck, MapPin, Layers, Settings, Award];

export default function WhyBedaya({ lang }) {
  const t = TRANSLATIONS[lang].strengths;

  return (
    <section className="py-24 bg-[#0B0C0E] border-t border-[#C5A059]/10 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#E5C158] text-xs font-bold uppercase tracking-widest">
            {t.sectionTitle}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.subtitle}
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-4" />
        </div>

        {/* 5 Executive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((item, index) => {
            const Icon = iconsMap[index];
            return (
              <div
                key={index}
                className="group p-8 rounded-2xl glass-card border border-[#C5A059]/20 hover:border-[#C5A059] transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#E5C158] group-hover:bg-[#C5A059] group-hover:text-[#0B0C0E] flex items-center justify-center transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#E5C158] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between text-xs text-[#C5A059] font-mono">
                  <span>Bedaya Value</span>
                  <span className="font-bold">0{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
