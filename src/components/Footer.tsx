import React from 'react';
import { NavSection } from '../types';
import { Sparkles, Mail, Github, Twitter, Linkedin, ExternalLink, Globe } from 'lucide-react';

interface FooterProps {
  onNavigate: (section: NavSection) => void;
  lang: 'es' | 'en';
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, lang }) => {
  return (
    <footer className="w-full border-t border-[#e0eaff]/15 bg-[#02102e] text-[#e0eaff] py-16 px-4 sm:px-8 mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand & Mission */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#ffc300] flex items-center justify-center text-[#041b47] font-serif-display font-black text-xl shadow-lg shadow-amber-500/20">
              E
            </div>
            <div>
              <span className="font-serif-display text-2xl font-bold tracking-tight text-white block">
                EcoLab
              </span>
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
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-[#ffc300]/20 hover:text-[#ffc300] transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-[#ffc300]/20 hover:text-[#ffc300] transition-colors">
              <Twitter className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-[#ffc300]/20 hover:text-[#ffc300] transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="mailto:investigacion@ecolab-research.org" className="p-2 rounded-lg bg-white/5 hover:bg-[#ffc300]/20 hover:text-[#ffc300] transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Navigation Column 1 */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono-code uppercase text-[#ffc300] font-bold tracking-wider">
            {lang === 'es' ? 'Navegación' : 'Navigation'}
          </h4>
          <ul className="space-y-2 text-xs text-[#e0eaff]/75">
            <li>
              <button onClick={() => onNavigate('inicio')} className="hover:text-[#ffc300] transition-colors">
                {lang === 'es' ? 'Inicio & Manifiesto' : 'Home & Manifesto'}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('formacion')} className="hover:text-[#ffc300] transition-colors">
                {lang === 'es' ? 'Semilleros & Cursos' : 'Courses & Seminars'}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('mentores')} className="hover:text-[#ffc300] transition-colors">
                {lang === 'es' ? 'Mentores & Docentes' : 'Mentors & Faculty'}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('proyectos')} className="hover:text-[#ffc300] transition-colors">
                {lang === 'es' ? 'Working Papers & Tesis' : 'Working Papers'}
              </button>
            </li>
          </ul>
        </div>

        {/* Navigation Column 2 */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono-code uppercase text-white font-bold tracking-wider">
            {lang === 'es' ? 'Observatorio & Data' : 'Data & Tools'}
          </h4>
          <ul className="space-y-2 text-xs text-[#e0eaff]/75">
            <li>
              <button onClick={() => onNavigate('data')} className="hover:text-[#ffc300] transition-colors">
                {lang === 'es' ? 'EcoLab Data Hub (API)' : 'Data Hub (API)'}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('recursos')} className="hover:text-[#ffc300] transition-colors">
                {lang === 'es' ? 'Plantillas LaTeX & Quarto' : 'LaTeX & Quarto Templates'}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('recursos')} className="hover:text-[#ffc300] transition-colors">
                {lang === 'es' ? 'Scripts R & Stata' : 'R & Stata Scripts'}
              </button>
            </li>
            <li>
              <button onClick={() => onNavigate('recursos')} className="hover:text-[#ffc300] transition-colors">
                {lang === 'es' ? 'Protocolo AEA Data' : 'Replication Standard'}
              </button>
            </li>
          </ul>
        </div>

        {/* Affiliations & Ethics */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono-code uppercase text-[#ffc300] font-bold tracking-wider">
            {lang === 'es' ? 'Alianzas Académicas' : 'Affiliations'}
          </h4>
          <p className="text-[11px] text-[#e0eaff]/75 leading-relaxed font-mono-code">
            En colaboración con Departamentos de Economía de 28 universidades en Latinoamérica, Europa y EE.UU.
          </p>
          <div className="p-2.5 rounded-lg bg-[#041b47] border border-[#e0eaff]/15 text-[10px] font-mono-code text-[#e0eaff]/85">
            <span className="text-[#ffc300] font-bold">Open Access:</span> Todos los datasets y códigos se distribuyen bajo licencia MIT y CC-BY 4.0.
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-10 mt-10 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code text-[#e0eaff]/60">
        <div>
          © 2026 EcoLab • Economic Research & Quantitative Methods Laboratory.
        </div>
        <div className="flex gap-4">
          <span className="hover:text-[#ffc300] cursor-pointer">Replication Policy</span>
          <span>•</span>
          <span className="hover:text-[#ffc300] cursor-pointer">Data Ethics</span>
          <span>•</span>
          <span className="hover:text-[#ffc300] cursor-pointer">Open Science</span>
        </div>
      </div>
    </footer>
  );
};
