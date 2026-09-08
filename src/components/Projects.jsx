import React, { useState } from 'react';
import { MapPin, ArrowRight, ArrowLeft } from 'lucide-react';
import { PROJECTS_DATA, TRANSLATIONS } from '../data/translations';
import { IMAGES_CONFIG } from '../data/images';
import ProjectModal from './ProjectModal';
import ImagePlaceholder from './ImagePlaceholder';

export default function Projects({ lang, onOpenWhatsApp }) {
  const [filter, setFilter] = useState('ALL');
  const [selectedProject, setSelectedProject] = useState(null);

  const t = TRANSLATIONS[lang].projects;
  const isRtl = lang === 'ar';

  const filteredProjects = PROJECTS_DATA.filter((item) => {
    if (filter === 'EGYPT') return item.country === 'Egypt';
    if (filter === 'OMAN') return item.country === 'Oman';
    return true;
  });

  return (
    <section id="projects" className="py-24 bg-theme-main relative overflow-hidden border-t border-[#C5A059]/15">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/10 border border-[#C5A059]/30 text-[#C5A059] text-xs font-extrabold uppercase tracking-widest">
            {t.sectionTitle}
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-theme-title tracking-tight">
            {t.subtitle}
          </h2>
          <div className="w-24 h-1 bg-gold-gradient mx-auto rounded-full mt-4" />
        </div>

        {/* Country Filter Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {[
            { id: 'ALL', label: t.filterAll },
            { id: 'EGYPT', label: t.filterEgypt },
            { id: 'OMAN', label: t.filterOman },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 ${
                filter === btn.id
                  ? 'bg-gold-gradient text-[#0B0C0E] shadow-md scale-105'
                  : 'bg-theme-card border border-[#C5A059]/30 text-theme-sub hover:border-[#C5A059] hover:text-[#C5A059]'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => {
            const title = lang === 'ar' ? project.titleAr : project.titleEn;
            const client = lang === 'ar' ? project.clientAr : project.clientEn;
            const location = lang === 'ar' ? project.locationAr : project.locationEn;

            const imageSrc = IMAGES_CONFIG.projects[project.id] || null;

            return (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-theme-card rounded-2xl overflow-hidden border border-[#C5A059]/20 hover:border-[#C5A059] cursor-pointer transition-all duration-500 hover:-translate-y-1.5 shadow-lg flex flex-col justify-between"
              >
                {/* Image Placeholder Slot */}
                <div className="relative h-52 w-full overflow-hidden bg-theme-placeholder">
                  <ImagePlaceholder
                    src={imageSrc}
                    alt={title}
                    aspectRatio="h-full w-full"
                    title={title}
                    lang={lang}
                  />
                  
                  {/* Country Flag Badge */}
                  <span className="absolute top-3 right-3 rtl:right-auto rtl:left-3 px-2.5 py-0.5 rounded-md bg-theme-main/90 border border-[#C5A059]/40 text-[#C5A059] font-bold text-[10px] tracking-wider uppercase backdrop-blur-sm">
                    {project.country}
                  </span>
                </div>

                {/* Card Info */}
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-theme-title group-hover:text-[#C5A059] transition-colors leading-snug">
                      {title}
                    </h3>
                    
                    <p className="text-xs font-semibold text-[#C5A059]">
                      {client}
                    </p>

                    <p className="text-xs text-theme-sub flex items-center gap-1.5 pt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                      <span className="truncate">{location}</span>
                    </p>
                  </div>

                  {/* View Details Link */}
                  <div className="pt-4 border-t border-theme flex items-center justify-between text-xs font-bold text-[#C5A059] group-hover:text-[#E1C16E] transition-colors">
                    <span>{t.viewDetails}</span>
                    {isRtl ? (
                      <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
                    ) : (
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    )}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          lang={lang}
          onInquire={(msg) => onOpenWhatsApp(msg)}
        />
      )}
    </section>
  );
}
