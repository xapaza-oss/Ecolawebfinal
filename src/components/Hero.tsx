import React from 'react';
import { ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { ShaderBackground } from './ShaderBackground';

interface HeroProps {
  isDark: boolean;
  onExplore: () => void;
  onJoin: () => void;
  lang: 'es' | 'en';
}

export const Hero: React.FC<HeroProps> = ({ isDark, onExplore, onJoin, lang }) => {
  return (
    <header className="relative min-h-[90vh] lg:min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 pb-16">
      {/* Dynamic WebGL Shader Canvas background */}
      <ShaderBackground isDark={isDark} />

      <div className="relative z-10 text-center max-w-4xl px-6 sm:px-8 mx-auto flex flex-col items-center">
        {/* Top Laboratory Tag / Badge */}
        <div
          id="hero-badge"
          className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border mb-8 shadow-sm backdrop-blur-md animate-fade-in ${
            isDark 
              ? 'border-[#ffc300]/40 bg-[#041b47]/70 text-[#ffc300]' 
              : 'border-[#041b47]/25 bg-white/85 text-[#041b47]'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-[#ffc300] animate-pulse shadow-[0_0_8px_#ffc300]" />
          <span className="font-mono-code text-[11px] sm:text-xs uppercase tracking-[0.2em] font-semibold">
            {lang === 'es' ? 'Laboratorio de Investigación Económica' : 'Economic Research Laboratory'}
          </span>
        </div>

        {/* Display Title: ECOLAB in Serif */}
        <h1
          id="hero-main-title"
          className={`font-serif-display text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight mb-4 select-none ${
            isDark ? 'text-white drop-shadow-[0_4px_24px_rgba(224,234,255,0.2)]' : 'text-[#041b47]'
          }`}
        >
          ECOLAB
        </h1>

        {/* Subtitle */}
        <h2
          id="hero-subtitle"
          className={`font-serif-display text-xl sm:text-2xl md:text-3xl font-medium mb-6 max-w-2xl text-balance ${
            isDark ? 'text-[#ffc300]' : 'text-[#041b47]'
          }`}
        >
          {lang === 'es' ? 'Investigamos. Aprendemos. Conectamos.' : 'We Research. We Learn. We Connect.'}
        </h2>

        {/* Body Description */}
        <p
          id="hero-description"
          className={`font-sans text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-2xl text-balance font-normal ${
            isDark ? 'text-[#e0eaff]/90' : 'text-[#041b47]/85'
          }`}
        >
          {lang === 'es'
            ? 'Un espacio para desarrollar investigación económica, transformar preguntas en evidencia y conectar estudiantes con docentes, mentores y datos.'
            : 'A space to develop economic research, transform questions into rigorous empirical evidence, and connect students with professors, mentors, and open datasets.'}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full sm:w-auto">
          <button
            id="hero-cta-explore"
            onClick={onExplore}
            className="w-full sm:w-auto px-8 py-3.5 bg-[#ffc300] hover:bg-[#ffd033] text-[#041b47] font-mono-code text-xs sm:text-sm uppercase tracking-wider font-bold rounded shadow-[0_0_25px_rgba(255,195,0,0.4)] hover:shadow-[0_0_35px_rgba(255,195,0,0.6)] hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group border border-[#ffc300]"
          >
            <span>{lang === 'es' ? 'Explorar EcoLab' : 'Explore EcoLab'}</span>
            <ArrowRight className="w-4 h-4 text-[#041b47] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="hero-cta-join"
            onClick={onJoin}
            className={`w-full sm:w-auto px-8 py-3.5 bg-transparent font-mono-code text-xs sm:text-sm uppercase tracking-wider font-semibold rounded hover:bg-white/10 active:scale-95 transition-all flex items-center justify-center gap-2 border ${
              isDark
                ? 'text-white border-[#e0eaff]/30 hover:border-[#ffc300]'
                : 'text-[#041b47] border-[#041b47]/30 hover:border-[#041b47] hover:bg-[#e0eaff]/30'
            }`}
          >
            <Sparkles className="w-4 h-4 text-[#ffc300]" />
            <span>{lang === 'es' ? 'Únete a EcoLab' : 'Join EcoLab'}</span>
          </button>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={onExplore}
        aria-label="Descubrir más"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity focus:outline-none cursor-pointer group"
      >
        <span className="font-mono-code text-[10px] tracking-[0.25em] text-[#e0eaff]/70 uppercase font-medium group-hover:text-[#ffc300] transition-colors">
          {lang === 'es' ? 'DESCUBRIR' : 'DISCOVER'}
        </span>
        <ChevronDown className="w-5 h-5 text-[#ffc300] animate-bounce group-hover:text-white transition-colors" />
      </button>
    </header>
  );
};
