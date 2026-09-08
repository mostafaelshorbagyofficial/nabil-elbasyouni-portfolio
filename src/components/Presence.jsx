import React from 'react';
import { MapPin, TrendingUp } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';

export default function Presence({ lang }) {
  const t = TRANSLATIONS[lang].presence;

  return (
    <section className="py-24 bg-theme-main border-t border-[#C5A059]/15 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] text-xs font-extrabold uppercase tracking-widest">
            {t.sectionTitle}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-theme-title tracking-tight">
            {t.subtitle}
          </h2>
          <p className="text-sm sm:text-base text-theme-sub max-w-2xl mx-auto mt-2">
            {t.message}
          </p>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-4" />
        </div>

        {/* Presence Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Egypt Card */}
          <div className="lg:col-span-4 p-8 rounded-2xl bg-theme-card border border-[#C5A059]/30 hover:border-[#C5A059] transition-all space-y-4 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 text-2xl flex items-center justify-center">
                🇪🇬
              </div>
              <span className="px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#C5A059] text-xs font-mono font-extrabold">
                15+ Projects
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-theme-title">
                {t.egyptTitle}
              </h3>
              <p className="text-sm font-semibold text-[#C5A059] mt-1">
                {t.egyptCount}
              </p>
            </div>

            <p className="text-xs text-theme-sub leading-relaxed border-t border-theme pt-3">
              {lang === 'ar' 
                ? 'قاعدة خبرة هندسية عريقة تمتد عبر محافظات جمهورية مصر العربية (الشرقية، البحيرة، الدقهلية، وغيرها).'
                : 'Deep engineering footprint across major Egyptian governorates (Sharqia, Beheira, Dakahlia, etc.).'}
            </p>
          </div>

          {/* Central Regional Visual */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-theme-card border border-[#C5A059]/30 text-center relative overflow-hidden shadow-xl min-h-[280px] flex flex-col items-center justify-center space-y-6">
            
            <div className="relative w-full h-36 flex items-center justify-center">
              {/* Concentric Rings */}
              <div className="absolute w-36 h-36 rounded-full border border-[#C5A059]/20 animate-pulse" />
              <div className="absolute w-24 h-24 rounded-full border border-[#C5A059]/30" />
              
              {/* Connecting Line */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 300 150">
                <path 
                  d="M 60,75 Q 150,25 240,75" 
                  fill="none" 
                  stroke="#C5A059" 
                  strokeWidth="2" 
                  strokeDasharray="4,4"
                />
                <circle cx="60" cy="75" r="5" fill="#C5A059" />
                <circle cx="240" cy="75" r="5" fill="#C5A059" />
              </svg>

              <div className="absolute left-6 bottom-2 text-center">
                <span className="text-[11px] font-extrabold text-[#C5A059] block">EGYPT</span>
                <span className="text-[9px] text-theme-sub">15+ Feed Mills</span>
              </div>

              <div className="absolute right-6 bottom-2 text-center">
                <span className="text-[11px] font-extrabold text-[#C5A059] block">OMAN</span>
                <span className="text-[9px] text-theme-sub">2 Feed Mills</span>
              </div>
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#C5A059] flex items-center justify-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-[#C5A059]" />
                {t.mapCaption}
              </span>
              <p className="text-[11px] text-theme-sub">
                {lang === 'ar' ? 'التوسع المستمر نحو كافة أسواق الخليج العربي' : 'Strategic expansion across the Arabian Gulf'}
              </p>
            </div>

          </div>

          {/* Oman Card */}
          <div className="lg:col-span-4 p-8 rounded-2xl bg-theme-card border border-[#C5A059]/30 hover:border-[#C5A059] transition-all space-y-4 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 text-2xl flex items-center justify-center">
                🇴🇲
              </div>
              <span className="px-3 py-1 rounded-full bg-[#C5A059]/20 text-[#C5A059] text-xs font-mono font-extrabold">
                2 Projects
              </span>
            </div>

            <div>
              <h3 className="text-2xl font-extrabold text-theme-title">
                {t.omanTitle}
              </h3>
              <p className="text-sm font-semibold text-[#C5A059] mt-1">
                {t.omanCount}
              </p>
            </div>

            <p className="text-xs text-theme-sub leading-relaxed border-t border-theme pt-3">
              {lang === 'ar' 
                ? 'مشروعات نموذجية متكاملة في صحار (غدير شناص) وصلالة (مصنع النجد)، مدعومة بكادر فني متخصص.'
                : 'Benchmark turn-key feed mills in Sohar (Ghadeer Shinas) and Salalah (Al Najd), backed by technical excellence.'}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
