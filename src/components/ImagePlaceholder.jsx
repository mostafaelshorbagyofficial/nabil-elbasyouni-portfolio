import React from 'react';
import { Image as ImageIcon, Camera } from 'lucide-react';

export default function ImagePlaceholder({ 
  src = null, 
  alt = "Project Photo", 
  aspectRatio = "aspect-video",
  title = "PROJECT PHOTO",
  lang = "en",
  className = ""
}) {
  if (src && src.trim() !== "") {
    return (
      <div className={`relative overflow-hidden ${aspectRatio} ${className}`}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover filter contrast-105 transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${aspectRatio} rounded-xl bg-theme-placeholder border border-[#C5A059]/30 flex flex-col items-center justify-center p-6 text-center group transition-colors duration-500 ${className}`}>
      
      {/* Subtle Structural Linework Overlay */}
      <div className="absolute inset-0 opacity-[0.07] dark:opacity-[0.12] pointer-events-none bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Decorative Gold Corner Accents */}
      <div className="absolute top-2 left-2 w-2 h-2 border-t-2 border-l-2 border-[#C5A059]/60" />
      <div className="absolute top-2 right-2 w-2 h-2 border-t-2 border-r-2 border-[#C5A059]/60" />
      <div className="absolute bottom-2 left-2 w-2 h-2 border-b-2 border-l-2 border-[#C5A059]/60" />
      <div className="absolute bottom-2 right-2 w-2 h-2 border-b-2 border-r-2 border-[#C5A059]/60" />

      {/* Center Icon */}
      <div className="w-12 h-12 rounded-xl bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] flex items-center justify-center mb-3 group-hover:border-[#C5A059] transition-colors duration-300 shadow-sm">
        <Camera className="w-5 h-5 stroke-[1.5]" />
      </div>

      {/* Text Label */}
      <span className="text-xs font-extrabold uppercase tracking-widest text-theme-title">
        {title}
      </span>
      
      <span className="text-[10px] font-mono font-semibold text-[#C5A059] mt-1 tracking-wider uppercase">
        {lang === 'ar' ? 'سيتم إضافة الصورة الحقيقية' : 'PHOTO TO BE ADDED'}
      </span>

    </div>
  );
}
