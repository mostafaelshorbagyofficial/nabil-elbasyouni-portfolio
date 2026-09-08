import React from 'react';
import { X, MapPin, User, CheckCircle2, MessageSquare } from 'lucide-react';
import { TRANSLATIONS } from '../data/translations';
import { IMAGES_CONFIG } from '../data/images';
import ImagePlaceholder from './ImagePlaceholder';

export default function ProjectModal({ project, onClose, lang, onInquire }) {
  if (!project) return null;

  const t = TRANSLATIONS[lang].projects;

  const title = lang === 'ar' ? project.titleAr : project.titleEn;
  const client = lang === 'ar' ? project.clientAr : project.clientEn;
  const location = lang === 'ar' ? project.locationAr : project.locationEn;
  const type = lang === 'ar' ? project.typeAr : project.typeEn;
  const scope = lang === 'ar' ? project.scopeAr : project.scopeEn;

  const imageSrc = IMAGES_CONFIG.projects[project.id] || null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Dark Overlay */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Window */}
      <div className="relative w-full max-w-2xl bg-theme-card border border-[#C5A059]/40 rounded-2xl shadow-2xl overflow-hidden z-10 my-auto text-left rtl:text-right">
        
        {/* Image Placeholder Banner */}
        <div className="relative h-64 sm:h-72 w-full bg-theme-placeholder">
          <ImagePlaceholder
            src={imageSrc}
            alt={title}
            aspectRatio="h-full w-full"
            title={title}
            lang={lang}
          />
          
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 rtl:right-auto rtl:left-4 p-2.5 rounded-full bg-black/60 text-white hover:text-[#E1C16E] hover:bg-black transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Country Badge */}
          <div className="absolute bottom-4 left-6 rtl:left-auto rtl:right-6">
            <span className="px-3 py-1 rounded-md bg-[#C5A059] text-black font-bold text-xs tracking-wider uppercase shadow-md">
              {project.country}
            </span>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-theme-title tracking-tight">
              {title}
            </h3>
            <p className="text-sm font-semibold text-[#C5A059] mt-1">
              {type}
            </p>
          </div>

          {/* Key Meta Information Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-xl bg-theme-placeholder border border-[#C5A059]/20">
            <div className="flex items-start gap-3">
              <User className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-theme-sub font-medium">{t.modalClient}</p>
                <p className="text-sm font-bold text-theme-title mt-0.5">{client}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
              <div>
                <p className="text-xs text-theme-sub font-medium">{t.modalLocation}</p>
                <p className="text-sm font-bold text-theme-title mt-0.5">{location}</p>
              </div>
            </div>
          </div>

          {/* Execution Scope Details */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#C5A059] flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>{t.modalScope}</span>
            </h4>
            <p className="text-sm sm:text-base text-theme-sub leading-relaxed bg-theme-placeholder/50 p-4 rounded-xl border border-theme">
              {scope}
            </p>
          </div>

          {/* Footer Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-theme">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg border border-theme text-theme-sub hover:text-theme-title font-semibold text-sm transition-colors"
            >
              {t.modalClose}
            </button>

            <button
              onClick={() => {
                onClose();
                onInquire(`Inquiry regarding project: ${title} (${location})`);
              }}
              className="w-full sm:w-auto px-6 py-2.5 rounded-lg bg-gold-gradient hover:bg-gold-gradient-hover text-[#0B0C0E] font-bold text-sm tracking-wider uppercase shadow-lg flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>{t.modalContactCTA}</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
