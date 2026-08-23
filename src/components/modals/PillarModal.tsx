import React from 'react';
import { PillarDetail, NavSection } from '../../types';
import { X, CheckCircle2, Cpu, BarChart2, ArrowRight } from 'lucide-react';

interface PillarModalProps {
  pillar: PillarDetail | null;
  onClose: () => void;
  onNavigate: (section: NavSection) => void;
  isDark: boolean;
  lang: 'es' | 'en';
}

export const PillarModal: React.FC<PillarModalProps> = ({
  pillar,
  onClose,
  onNavigate,
  isDark,
  lang
}) => {
  if (!pillar) return null;

  const handleAction = () => {
    let section: NavSection = 'inicio';
    if (pillar.id === 'formacion') section = 'formacion';
    if (pillar.id === 'mentoria') section = 'mentores';
    if (pillar.id === 'investigacion') section = 'proyectos';
    if (pillar.id === 'datos') section = 'data';
    if (pillar.id === 'resultados') section = 'proyectos';
    
    onClose();
    onNavigate(section);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div
        className={`relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border ${
          isDark
            ? 'bg-[#041b47] border-[#e0eaff]/20 text-[#e0eaff]'
            : 'bg-white border-[#041b47]/20 text-[#041b47]'
        }`}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 pb-4 flex items-start justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center font-mono-code font-bold text-xl border bg-[#ffc300]/15 border-[#ffc300]/40 text-[#ffc300]"
            >
              {pillar.title.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded bg-[#ffc300]/15 text-[#ffc300] border border-[#ffc300]/30 font-semibold">
                  {lang === 'es' ? 'Pilar Metodológico' : 'Methodological Pillar'}
                </span>
              </div>
              <h3 className={`font-serif-display text-2xl sm:text-3xl font-bold mt-1 ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
                {pillar.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-[#e0eaff]/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          <div>
            <h4 className="font-serif-display text-lg font-semibold mb-2 text-[#ffc300]">
              {pillar.subtitle}
            </h4>
            <p className={`font-sans text-sm sm:text-base leading-relaxed ${isDark ? 'text-[#e0eaff]/85' : 'text-[#041b47]/80'}`}>
              {pillar.description}
            </p>
          </div>

          {/* Workflow Steps */}
          <div>
            <h5 className="font-mono-code text-xs uppercase tracking-wider text-[#ffc300] font-semibold mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#ffc300]" />
              {lang === 'es' ? 'Fases y Procesos Clave' : 'Key Phases & Workflow'}
            </h5>
            <ul className="space-y-2.5">
              {pillar.steps.map((step, idx) => (
                <li
                  key={idx}
                  className={`p-3 rounded-lg flex items-start gap-3 text-sm ${
                    isDark ? 'bg-[#02102e]/80 border border-[#e0eaff]/10' : 'bg-[#e0eaff]/30 border border-[#041b47]/10'
                  }`}
                >
                  <span className="font-mono-code font-bold text-xs text-[#ffc300] mt-0.5">
                    0{idx + 1}.
                  </span>
                  <span className={isDark ? 'text-white' : 'text-[#041b47]'}>{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h5 className="font-mono-code text-xs uppercase tracking-wider text-[#e0eaff] font-semibold mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-[#ffc300]" />
              {lang === 'es' ? 'Herramientas y Tecnologías' : 'Tools & Technologies'}
            </h5>
            <div className="flex flex-wrap gap-2">
              {pillar.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-mono-code bg-[#02102e] border border-[#e0eaff]/20 text-[#e0eaff]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Metrics */}
          <div className="p-4 rounded-xl bg-[#02102e]/90 border border-[#ffc300]/30 flex items-center gap-3">
            <BarChart2 className="w-6 h-6 text-[#ffc300] shrink-0" />
            <div>
              <span className="text-[11px] font-mono-code uppercase text-[#ffc300] font-semibold block">
                {lang === 'es' ? 'Impacto Medible' : 'Measurable Impact'}
              </span>
              <p className="font-sans text-sm font-medium text-white">
                {pillar.metrics}
              </p>
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 bg-black/20 border-t border-white/10 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-mono-code text-[#e0eaff]/70 hover:text-white transition-colors"
          >
            {lang === 'es' ? 'Cerrar' : 'Close'}
          </button>

          <button
            onClick={handleAction}
            className="px-6 py-2.5 bg-[#ffc300] hover:bg-[#ffd033] text-[#041b47] font-mono-code text-xs uppercase font-bold tracking-wider rounded flex items-center gap-2 shadow-sm active:scale-95 transition-all"
          >
            <span>{lang === 'es' ? `Ir a ${pillar.title}` : `Go to ${pillar.title}`}</span>
            <ArrowRight className="w-4 h-4 text-[#041b47]" />
          </button>
        </div>
      </div>
    </div>
  );
};
