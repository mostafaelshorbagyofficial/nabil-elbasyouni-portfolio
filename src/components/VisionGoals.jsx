import React from 'react';
import { Eye, Target, Compass, Sparkles } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function VisionGoals({ lang }) {
  const v = TRANSLATIONS[lang].vision;
  const g = TRANSLATIONS[lang].goals;

  const goalsList = [
    { title: g.goal1Title, text: g.goal1, number: '01' },
    { title: g.goal2Title, text: g.goal2, number: '02' },
    { title: g.goal3Title, text: g.goal3, number: '03' },
  ];

  return (
    <section id="vision" className="py-24 bg-[#0E0F12] relative overflow-hidden border-t border-[#C5A059]/10">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Vision Editorial Card */}
          <div className="lg:col-span-5 p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-[#14161C] to-[#0B0C0E] border-2 border-[#C5A059]/40 shadow-2xl flex flex-col justify-between relative overflow-hidden group">
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059]/10 rounded-full blur-2xl pointer-events-none" />

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#E5C158] flex items-center justify-center">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059]">
                    {lang === 'ar' ? 'رسالة القيادة' : 'Executive Direction'}
                  </span>
                  <h3 className="text-2xl font-extrabold text-white">
                    {v.sectionTitle}
                  </h3>
                </div>
              </div>

              <blockquote className="text-base sm:text-lg text-gray-200 leading-relaxed font-serif italic border-l-2 border-l-[#C5A059] rtl:border-l-0 rtl:border-r-2 rtl:border-r-[#C5A059] pl-4 rtl:pl-0 rtl:pr-4">
                "{v.content}"
              </blockquote>
            </div>

            <div className="pt-8 border-t border-[#C5A059]/20 flex items-center justify-between text-xs text-[#C5A059] font-mono">
              <span>Bedaya Executive Vision</span>
              <Sparkles className="w-4 h-4 text-[#C5A059]" />
            </div>

          </div>

          {/* Goals Column */}
          <div className="lg:col-span-7 space-y-6 flex flex-col justify-center">
            
            <div className="space-y-2 mb-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#E5C158] text-xs font-bold uppercase tracking-widest">
                <Target className="w-4 h-4 text-[#C5A059]" />
                <span>{g.sectionTitle}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {lang === 'ar' ? 'الرؤية المستقبلية والأهداف الاستراتيجية' : 'Strategic Objectives'}
              </h3>
            </div>

            <div className="space-y-4">
              {goalsList.map((item, index) => (
                <div
                  key={index}
                  className="group p-6 rounded-2xl bg-[#14161C] border border-[#C5A059]/20 hover:border-[#C5A059] transition-all duration-300 shadow-lg flex items-start gap-4"
                >
                  <div className="text-2xl font-mono font-bold text-[#E5C158] bg-[#C5A059]/10 border border-[#C5A059]/30 w-12 h-12 rounded-xl flex items-center justify-center shrink-0">
                    {item.number}
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-base font-bold text-white group-hover:text-[#E5C158] transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
