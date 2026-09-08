import React from 'react';
import { X, MessageSquare, PhoneCall, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { WHATSAPP_NUMBERS, TRANSLATIONS } from '../data/translations';

export default function WhatsAppModal({ isOpen, onClose, prefilledMessage = "", lang = "en" }) {
  if (!isOpen) return null;

  const t = TRANSLATIONS[lang].whatsappModal;
  const isRtl = lang === "ar";

  const handleSelectNumber = (waUrl) => {
    let finalUrl = waUrl;
    if (prefilledMessage && prefilledMessage.trim() !== "") {
      finalUrl += `?text=${encodeURIComponent(prefilledMessage)}`;
    }
    window.open(finalUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dark Overlay */}
      <div 
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#14161C] border border-[#C5A059]/40 rounded-2xl shadow-2xl shadow-black/90 p-6 sm:p-8 z-10 my-auto text-left transform transition-all duration-300">
        
        {/* Top Header */}
        <div className="flex items-start justify-between border-b border-[#C5A059]/20 pb-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059]">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                {t.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#C5A059]/90 mt-0.5">
                {t.subtitle}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* 4 WhatsApp Numbers List */}
        <div className="space-y-3.5 mb-6">
          {WHATSAPP_NUMBERS.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSelectNumber(item.waUrl)}
              className="group relative flex items-center justify-between p-4 rounded-xl bg-[#0B0C0E]/70 border border-[#C5A059]/20 hover:border-[#C5A059] hover:bg-[#1A1D26] cursor-pointer transition-all duration-300 shadow-md"
            >
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-black text-emerald-400 flex items-center justify-center transition-all duration-300">
                  <MessageSquare className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-base sm:text-lg font-bold text-white group-hover:text-[#E5C158] transition-colors dir-ltr">
                      {item.displayNumber}
                    </span>
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded bg-[#C5A059]/15 text-[#E5C158] border border-[#C5A059]/30">
                      {lang === "ar" ? item.countryAr : item.country}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">
                    {lang === "ar" ? item.roleAr : item.role}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#C5A059] group-hover:text-[#E5C158] transition-colors">
                <span className="hidden sm:inline">{t.chatBtn}</span>
                {isRtl ? (
                  <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="flex items-center gap-2 p-3 rounded-lg bg-[#C5A059]/5 border border-[#C5A059]/15 text-xs text-gray-400">
          <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0" />
          <span>{t.copyNotice}</span>
        </div>

      </div>
    </div>
  );
}
