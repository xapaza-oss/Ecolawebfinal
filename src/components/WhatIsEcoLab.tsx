import React from 'react';
import { PILLARS_DATA } from '../data/mockData';
import { PillarDetail, NavSection } from '../types';
import { GraduationCap, Brain, Search, Database, TrendingUp, ArrowUpRight } from 'lucide-react';

interface WhatIsEcoLabProps {
  isDark: boolean;
  onSelectPillar: (pillar: PillarDetail) => void;
  onNavigate: (section: NavSection) => void;
  lang: 'es' | 'en';
}

export const WhatIsEcoLab: React.FC<WhatIsEcoLabProps> = ({
  isDark,
  onSelectPillar,
  onNavigate,
  lang
}) => {
  const getIcon = (iconName: string, color: string) => {
    const className = "w-8 h-8 mb-4 transition-transform group-hover:scale-110 duration-300";
    switch (iconName) {
      case 'school':
        return <GraduationCap className={className} style={{ color }} />;
      case 'psychology':
        return <Brain className={className} style={{ color }} />;
      case 'search':
        return <Search className={className} style={{ color }} />;
      case 'database':
        return <Database className={className} style={{ color }} />;
      case 'insights':
        return <TrendingUp className={className} style={{ color }} />;
      default:
        return <GraduationCap className={className} style={{ color }} />;
    }
  };

  const getSectionForPillar = (id: string): NavSection => {
    switch (id) {
      case 'formacion':
        return 'formacion';
      case 'mentoria':
        return 'mentores';
      case 'investigacion':
        return 'proyectos';
      case 'datos':
        return 'data';
      case 'resultados':
        return 'proyectos';
      default:
        return 'inicio';
    }
  };

  return (
    <section id="que-es-ecolab" className="py-20 px-4 sm:px-8 max-w-7xl mx-auto border-t border-[#e0eaff]/15">
      <div className="text-center mb-14">
        <h3
          id="what-is-title"
          className={`font-serif-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-[#041b47]'
          }`}
        >
          {lang === 'es' ? '¿Qué es EcoLab?' : 'What is EcoLab?'}
        </h3>
        <p
          id="what-is-subtitle"
          className={`font-sans text-base sm:text-lg max-w-2xl mx-auto font-normal ${
            isDark ? 'text-[#e0eaff]/85' : 'text-[#041b47]/85'
          }`}
        >
          {lang === 'es'
            ? 'Una metodología estructurada para transformar la curiosidad académica en impacto económico real.'
            : 'A structured methodology to transform academic curiosity into real, verifiable economic impact.'}
        </p>
      </div>

      {/* 5 Bento Grid cards exactly matching the image */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
        {PILLARS_DATA.map((pillar) => {
          return (
            <div
              key={pillar.id}
              id={`pillar-card-${pillar.id}`}
              onClick={() => onSelectPillar(pillar)}
              className={`group relative p-6 rounded-xl text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-between border ${
                isDark
                  ? 'glass-panel hover:border-[#ffc300]/60 hover:bg-[#07225b]/90 hover:shadow-[0_8px_30px_rgba(4,27,71,0.5)]'
                  : 'bg-white border-[#041b47]/15 hover:border-[#ffc300] hover:shadow-lg'
              }`}
            >
              {/* Corner quick action indicator */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="w-3.5 h-3.5 text-[#ffc300]" />
              </div>

              <div className="flex flex-col items-center w-full">
                {getIcon(pillar.iconName, pillar.color)}
                <h4
                  className={`font-mono-code text-base font-semibold mb-2 transition-colors ${
                    isDark ? 'text-white group-hover:text-[#ffc300]' : 'text-[#041b47] group-hover:text-[#041b47]'
                  }`}
                >
                  {pillar.title}
                </h4>
                <p
                  className={`font-sans text-xs leading-relaxed line-clamp-3 mb-4 ${
                    isDark ? 'text-[#e0eaff]/75' : 'text-[#041b47]/70'
                  }`}
                >
                  {pillar.subtitle}
                </p>
              </div>

              <div className="w-full pt-3 border-t border-white/5 flex items-center justify-center gap-1 text-[11px] font-mono-code text-[#ffc300] opacity-85 group-hover:opacity-100 group-hover:underline">
                <span>{lang === 'es' ? 'Ver detalles' : 'Learn more'}</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
