import React from 'react';
import { NavSection } from '../types';
import { Mail, Github, Twitter, Linkedin } from 'lucide-react';
import fotoLogo from '../../assets/Logo.png';

interface FooterProps {
  onNavigate: (section: NavSection) => void;
  lang: 'es' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  return (
    <footer className="w-full border-t border-[#e0eaff]/15 bg-[#02102e] text-[#e0eaff] py-16 px-4 sm:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl overflow-hidden flex items-center justify-center shadow-lg shadow-amber-500/20">
              <img src={fotoLogo} alt="EcoLab" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="font-serif-display text-2xl font-bold tracking-tight text-white block">EcoLab</span>
              <span className="font-mono-code text-[10px] uppercase tracking-widest text-[#ffc300] -mt-1 block font-semibold">
                Economic Research Laboratory
              </span>
            </div>
          </div>
          <p className="text-xs text-[#e0eaff]/75 max-w-sm leading-relaxed">
            {lang === 'es'
              ? 'Laboratorio interuniversitario de investigación económica aplicada, econometría causal, macroeconomía computacional y ciencia abierta.'
              : 'Inter-university laboratory for applied economics, causal inference, and reproducible quantitative research.'}
          </p>
          <div className="flex items-center gap-3 pt-2 text-[#e0eaff]/75">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-[#ffc300]/20 hover:text-[#ffc300] transition-colors"><Github className="w-4 h-4" /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-[#ffc300]/20 hover:text-[#ffc300] transition-colors"><Twitter className="w-4 h-4" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-[#ffc300]/20 hover:text-[#ffc300] transition-colors"><Linkedin className="w-4 h-4" /></a>
            <a href="mailto:investigacion@ecolab-research.org" className="p-2 rounded-lg bg-white/5 hover:bg-[#ffc300]/20 hover:text-[#ffc300] transition-colors"><Mail className="w-4 h-4" /></a>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-mono-code uppercase text-[#ffc300] font-bold tracking-wider">
            {lang === 'es' ? 'Alianzas Académicas' : 'Affiliations'}
          </h4>
          <p className="text-[11px] text-[#e0eaff]/75 leading-relaxed font-mono-code">
            Escribe aquí tu propio texto de alianzas académicas.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 mt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-[#e0eaff]/60">
        <div>© 2026 EcoLab • Economic Research & Quantitative Methods Laboratory.</div>
      </div>
    </footer>
  );
};
