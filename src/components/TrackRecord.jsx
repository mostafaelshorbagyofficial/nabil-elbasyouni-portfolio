import React from 'react';
import { Factory, Globe2, Layers, Users } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function TrackRecord({ lang }) {
  const t = TRANSLATIONS[lang].trackRecord;

  const stats = [
    {
      icon: Factory,
      number: t.stat1Number,
      label: t.stat1Label
    },
    {
      icon: Globe2,
      number: t.stat2Number,
      label: t.stat2Label
    },
    {
      icon: Layers,
      number: t.stat3Number,
      label: t.stat3Label
    },
    {
      icon: Users,
      number: t.stat4Number,
      label: t.stat4Label
    }
  ];

  return (
    <section className="py-16 bg-[#14161C] border-y border-[#C5A059]/20 relative overflow-hidden">
      
      {/* Background Accent Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#C5A059]/5 via-transparent to-[#C5A059]/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-2xl bg-[#0B0C0E]/80 border border-[#C5A059]/30 hover:border-[#C5A059] text-center transition-all duration-300 shadow-xl group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] group-hover:bg-[#C5A059] group-hover:text-[#0B0C0E] flex items-center justify-center mx-auto mb-4 transition-all duration-300 shadow-md">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="text-2xl sm:text-4xl font-extrabold text-gold-gradient tracking-tight font-serif mb-1">
                  {stat.number}
                </div>

                <p className="text-xs sm:text-sm font-medium text-gray-300">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
