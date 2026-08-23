import React, { useState } from 'react';
import { Project } from '../../types';
import { X, Download, Copy, Check, FileText, Database, Layers, Sparkles, BookOpen } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, Legend, Area, ComposedChart } from 'recharts';

interface PaperDetailModalProps {
  project: Project | null;
  onClose: () => void;
  isDark: boolean;
  lang: 'es' | 'en';
}

export const PaperDetailModal: React.FC<PaperDetailModalProps> = ({
  project,
  onClose,
  isDark,
  lang
}) => {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  if (!project) return null;

  const copyCitation = (format: 'APA' | 'BibTeX') => {
    let text = '';
    const authorNames = project.authors.map((a) => a.name).join(', ');
    if (format === 'APA') {
      text = `${authorNames} (${project.year}). ${project.title}. ${project.journal || 'EcoLab Working Paper Series'}.`;
    } else {
      const citeKey = `${project.authors[0].name.split(' ').pop()?.toLowerCase() || 'ecolab'}${project.year}`;
      text = `@article{${citeKey},\n  title={${project.title}},\n  author={${authorNames}},\n  journal={${project.journal || 'EcoLab Research Papers'}},\n  year={${project.year}}\n}`;
    }

    navigator.clipboard.writeText(text);
    setCopiedFormat(format);
    setTimeout(() => setCopiedFormat(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div
        className={`relative w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border ${
          isDark
            ? 'bg-[#041b47] border-[#e0eaff]/20 text-[#e0eaff]'
            : 'bg-white border-[#041b47]/20 text-[#041b47]'
        }`}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 pb-4 flex items-start justify-between border-b border-white/10">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded bg-[#ffc300]/15 text-[#ffc300] border border-[#ffc300]/30 font-semibold">
                {project.category}
              </span>
              <span className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded bg-[#02102e] text-[#e0eaff] border border-[#e0eaff]/15">
                {project.status} ({project.year})
              </span>
              {project.journal && (
                <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-[#ffc300]/20 text-[#ffc300] border border-[#ffc300]/40 font-semibold">
                  {project.journal}
                </span>
              )}
            </div>

            <h3 className={`font-serif-display text-xl sm:text-2xl font-bold pt-1 ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
              {project.title}
            </h3>

            <p className="text-xs font-mono-code text-[#e0eaff]/70">
              {project.authors.map((a) => `${a.name} (${a.institution})`).join(' • ')}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-[#e0eaff]/70 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[72vh] overflow-y-auto">
          {/* Abstract */}
          <div>
            <h4 className="font-mono-code text-xs uppercase tracking-wider text-[#ffc300] font-semibold mb-2 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-[#ffc300]" />
              {lang === 'es' ? 'Resumen Ejecutivo (Abstract)' : 'Abstract'}
            </h4>
            <p className={`text-sm leading-relaxed p-4 rounded-xl border ${
              isDark ? 'bg-[#02102e] border-[#e0eaff]/15 text-[#e0eaff]' : 'bg-[#e0eaff]/30 border-[#041b47]/10 text-[#041b47]'
            }`}>
              {project.abstract}
            </p>
          </div>

          {/* Interactive Chart Preview if available */}
          {project.chartData && project.chartData.length > 0 && (
            <div>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-mono-code text-xs uppercase tracking-wider text-[#ffc300] font-semibold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#ffc300]" />
                  {lang === 'es' ? 'Evidencia Empírica & Dinámica Estimada' : 'Empirical Evidence & Dynamic Estimates'}
                </h4>
                <span className="text-[10px] font-mono-code text-[#e0eaff]/70">
                  IC 95% + Efecto Tratamiento
                </span>
              </div>
              <div className="h-56 w-full p-2 bg-[#02102e] rounded-xl border border-[#e0eaff]/15">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={project.chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#07225b" />
                    <XAxis dataKey="period" stroke="#e0eaff" fontSize={11} opacity={0.7} />
                    <YAxis stroke="#e0eaff" fontSize={11} opacity={0.7} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#041b47', borderColor: '#ffc300', color: '#ffffff', borderRadius: '8px', fontSize: '12px' }}
                    />
                    <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '4px' }} />
                    <Line type="monotone" dataKey="baseline" name={lang === 'es' ? 'Contrafactual / Base' : 'Baseline'} stroke="#e0eaff" strokeDasharray="4 4" dot={{ r: 3 }} />
                    <Line type="monotone" dataKey="treatment" name={lang === 'es' ? 'Tratamiento Estimado' : 'Treatment Effect'} stroke="#ffc300" strokeWidth={2.5} dot={{ r: 4, fill: '#ffc300' }} />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* Key Findings */}
          <div>
            <h4 className="font-mono-code text-xs uppercase tracking-wider text-[#ffc300] font-semibold mb-2">
              {lang === 'es' ? 'Principales Hallazgos Cuantitativos' : 'Key Quantitative Findings'}
            </h4>
            <ul className="space-y-2">
              {project.keyFindings.map((finding, idx) => (
                <li
                  key={idx}
                  className={`p-2.5 rounded-lg border text-xs sm:text-sm flex items-start gap-2.5 ${
                    isDark ? 'bg-[#02102e]/60 border-[#e0eaff]/10 text-[#e0eaff]' : 'bg-[#e0eaff]/30 border-[#041b47]/10 text-[#041b47]'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#ffc300] mt-1.5 shrink-0" />
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Methodology & Data */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-[#02102e]/80 border-[#e0eaff]/10' : 'bg-[#e0eaff]/30 border-[#041b47]/10'}`}>
              <h5 className="text-[11px] font-mono-code uppercase text-[#ffc300] mb-1 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#ffc300]" />
                {lang === 'es' ? 'Metodología Econométrica' : 'Methodology'}
              </h5>
              <p className={`text-xs font-sans ${isDark ? 'text-[#e0eaff]' : 'text-[#041b47]'}`}>{project.methodology}</p>
            </div>

            <div className={`p-3.5 rounded-xl border ${isDark ? 'bg-[#02102e]/80 border-[#e0eaff]/10' : 'bg-[#e0eaff]/30 border-[#041b47]/10'}`}>
              <h5 className="text-[11px] font-mono-code uppercase text-[#ffc300] mb-1 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-[#ffc300]" />
                {lang === 'es' ? 'Dataset & Microdatos' : 'Dataset Used'}
              </h5>
              <p className={`text-xs font-sans ${isDark ? 'text-[#e0eaff]' : 'text-[#041b47]'}`}>{project.datasetUsed}</p>
            </div>
          </div>

          {/* JEL Codes */}
          <div>
            <h5 className="text-[11px] font-mono-code uppercase text-[#e0eaff]/80 mb-1.5">
              {lang === 'es' ? 'Clasificación JEL (Journal of Economic Literature)' : 'JEL Classification'}
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {project.jelCodes.map((jel, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-[#02102e] border border-[#e0eaff]/15 text-[#e0eaff]"
                >
                  {jel}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 bg-black/20 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => copyCitation('APA')}
              className="px-3 py-1.5 bg-white/5 hover:bg-white/15 text-xs font-mono-code rounded flex items-center gap-1 text-[#e0eaff] hover:text-white transition-colors"
            >
              {copiedFormat === 'APA' ? <Check className="w-3.5 h-3.5 text-[#ffc300]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedFormat === 'APA' ? '¡Copiado!' : 'Cita APA'}</span>
            </button>

            <button
              onClick={() => copyCitation('BibTeX')}
              className="px-3 py-1.5 bg-white/5 hover:bg-white/15 text-xs font-mono-code rounded flex items-center gap-1 text-[#e0eaff] hover:text-white transition-colors"
            >
              {copiedFormat === 'BibTeX' ? <Check className="w-3.5 h-3.5 text-[#ffc300]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedFormat === 'BibTeX' ? '¡Copiado!' : 'BibTeX'}</span>
            </button>
          </div>

          <button
            onClick={() => alert(lang === 'es' ? 'Descargando Working Paper PDF (Simulado)...' : 'Downloading Paper PDF (Simulation)...')}
            className="px-5 py-2 bg-[#ffc300] hover:bg-[#ffd033] text-[#041b47] font-mono-code text-xs uppercase font-bold tracking-wider rounded flex items-center gap-2 shadow-sm active:scale-95 transition-all"
          >
            <Download className="w-4 h-4 text-[#041b47]" />
            <span>{lang === 'es' ? 'Descargar PDF Completo' : 'Download Full PDF'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
