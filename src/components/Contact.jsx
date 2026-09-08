import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ShieldCheck } from 'lucide-react';
import { TRANSLATIONS, WHATSAPP_NUMBERS } from '../data/translations';

export default function Contact({ lang, onOpenWhatsApp }) {
  const t = TRANSLATIONS[lang].contact;

  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Construct WhatsApp pre-filled inquiry text
    const inquiryText = lang === 'ar'
      ? `مرحبًا أستاذ نبيل،\n\nلدي استفسار بخصوص إنشاء/تطوير مصنع أعلاف.\n\nالاسم: ${formData.name || 'غير محدد'}\nرقم التواصل/البريد: ${formData.contact || 'غير محدد'}\n\nالاستفسار:\n${formData.message || 'لا توجد تفاصيل إضافية'}`
      : `Hello Mr. Nabil,\n\nI would like to inquire about feed mill engineering & construction solutions.\n\nName: ${formData.name || 'Not specified'}\nContact Info: ${formData.contact || 'Not specified'}\n\nInquiry Details:\n${formData.message || 'No additional details'}`;

    onOpenWhatsApp(inquiryText);
  };

  return (
    <section id="contact" className="py-24 bg-[#0E0F12] relative overflow-hidden border-t border-[#C5A059]/20">
      
      {/* Ambient background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#E5C158] text-xs font-bold uppercase tracking-widest">
            {t.sectionTitle}
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {t.headline}
          </h2>
          <p className="text-sm sm:text-base text-gray-300">
            {t.subtitle}
          </p>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-4" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Email Addresses */}
            <div className="p-6 rounded-2xl glass-card border border-[#C5A059]/20 hover:border-[#C5A059] transition-all duration-300 space-y-3">
              <div className="flex items-center gap-3 text-[#C5A059]">
                <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-wider">
                  {t.emailTitle}
                </h3>
              </div>
              <div className="space-y-1.5 pt-2 border-t border-white/5 font-mono text-sm">
                <a 
                  href="mailto:Nabil_elmasry62@yahoo.com" 
                  className="block text-gray-300 hover:text-[#E5C158] transition-colors"
                >
                  Nabil_elmasry62@yahoo.com
                </a>
                <a 
                  href="mailto:Ahmedz_hegazy33@yahoo.com" 
                  className="block text-gray-300 hover:text-[#E5C158] transition-colors"
                >
                  Ahmedz_hegazy33@yahoo.com
                </a>
              </div>
            </div>

            {/* Direct Phone Numbers */}
            <div className="p-6 rounded-2xl glass-card border border-[#C5A059]/20 hover:border-[#C5A059] transition-all duration-300 space-y-3">
              <div className="flex items-center gap-3 text-[#C5A059]">
                <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-wider">
                  {t.phoneTitle}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-white/5 font-mono text-sm">
                {WHATSAPP_NUMBERS.map((num) => (
                  <button
                    key={num.id}
                    onClick={() => onOpenWhatsApp()}
                    className="p-2.5 rounded-lg bg-[#0B0C0E]/70 border border-[#C5A059]/20 hover:border-[#C5A059] text-left rtl:text-right transition-colors group flex items-center justify-between"
                  >
                    <div>
                      <span className="block font-bold text-white group-hover:text-[#E5C158] transition-colors text-xs dir-ltr">
                        {num.displayNumber}
                      </span>
                      <span className="text-[10px] text-gray-400">
                        {lang === 'ar' ? num.countryAr : num.country}
                      </span>
                    </div>
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  </button>
                ))}
              </div>
            </div>

            {/* Headquarters Address */}
            <div className="p-6 rounded-2xl glass-card border border-[#C5A059]/20 hover:border-[#C5A059] transition-all duration-300 space-y-3">
              <div className="flex items-center gap-3 text-[#C5A059]">
                <div className="w-10 h-10 rounded-lg bg-[#C5A059]/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-wider">
                  {t.addressTitle}
                </h3>
              </div>
              <p className="text-sm font-semibold text-gray-200 pt-2 border-t border-white/5">
                {t.address}
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-[#14161C] border-2 border-[#C5A059]/30 shadow-2xl space-y-6">
              
              <div className="space-y-1">
                <h3 className="text-2xl font-bold text-white">
                  {t.formTitle}
                </h3>
                <p className="text-xs text-gray-400">
                  {t.modalNotice}
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                    {t.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.namePlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0C0E] border border-[#C5A059]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059] transition-colors text-sm"
                  />
                </div>

                {/* Phone / Email */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                    {t.phoneEmailLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    placeholder={t.phoneEmailPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0C0E] border border-[#C5A059]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059] transition-colors text-sm"
                  />
                </div>

                {/* Inquiry */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-300">
                    {t.inquiryLabel} *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.inquiryPlaceholder}
                    className="w-full px-4 py-3 rounded-xl bg-[#0B0C0E] border border-[#C5A059]/30 text-white placeholder-gray-500 focus:outline-none focus:border-[#C5A059] transition-colors text-sm resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gold-gradient hover:bg-gold-gradient-hover text-[#0B0C0E] font-bold text-sm tracking-wider uppercase shadow-xl shadow-[#C5A059]/20 hover:scale-[1.01] transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-5 h-5 fill-current" />
                  <span>{t.submitBtn}</span>
                </button>

                <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>Submitting triggers direct WhatsApp contact selection</span>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
