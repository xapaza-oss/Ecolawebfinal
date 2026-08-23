import React, { useState } from 'react';
import { RESOURCES_DATA } from '../../data/mockData';
import { ResourceItem } from '../../types';
import { BookOpen, Code2, Download, Copy, Check, FileCode, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';

interface RecursosViewProps {
  isDark: boolean;
  lang: 'es' | 'en';
}

export const RecursosView: React.FC<RecursosViewProps> = ({ isDark, lang }) => {
  const [selectedType, setSelectedType] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const types = [
    { id: 'all', label: lang === 'es' ? 'Todos los Recursos' : 'All Resources' },
    { id: 'Plantilla Académica', label: 'Plantillas LaTeX' },
    { id: 'Script de Código', label: 'Scripts R & Stata' },
    { id: 'Guía Metodológica', label: 'Guías de Reproducibilidad' }
  ];

  const filteredResources = RESOURCES_DATA.filter(
    (res) => selectedType === 'all' || res.type === selectedType
  );

  const handleCopySnippet = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="py-12 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffc300]/15 border border-[#ffc300]/40 text-[#ffc300] font-mono-code text-xs uppercase tracking-widest mb-4 font-semibold">
          <Code2 className="w-3.5 h-3.5" />
          <span>{lang === 'es' ? 'Kit Metodológico & Reproducibilidad' : 'Methodology & Reproducibility Toolkit'}</span>
        </div>
        <h2 className={`font-serif-display text-3xl sm:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
          {lang === 'es' ? 'Recursos, Código y Plantillas' : 'Research Resources & Templates'}
        </h2>
        <p className={`font-sans text-base sm:text-lg ${isDark ? 'text-[#e0eaff]/85' : 'text-[#041b47]/85'}`}>
          {lang === 'es'
            ? 'Plantillas LaTeX para tesis en economía, pipelines econométricos en R y Stata, y estándares de ciencia abierta para maximizar el rigor de tu investigación.'
            : 'LaTeX templates for economics theses, R/Stata pipelines, and Open Science replication standards.'}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar mb-10 pb-2">
        {types.map((type) => (
          <button
            key={type.id}
            onClick={() => setSelectedType(type.id)}
            className={`px-4 py-2 rounded-xl text-xs font-mono-code whitespace-nowrap transition-all border ${
              selectedType === type.id
                ? 'bg-[#ffc300] text-[#041b47] border-[#ffc300] font-bold'
                : isDark
                  ? 'bg-white/5 border-white/10 text-[#e0eaff]/70 hover:text-white'
                  : 'bg-white border-[#041b47]/15 text-[#041b47]/70 hover:text-[#041b47]'
            }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      {/* Resources Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {filteredResources.map((resource) => (
          <div
            key={resource.id}
            className={`p-6 sm:p-8 rounded-2xl border transition-all flex flex-col justify-between ${
              isDark
                ? 'glass-panel border-[#e0eaff]/15 hover:border-[#ffc300]/50'
                : 'bg-white border-[#041b47]/15 shadow-md'
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-mono-code uppercase px-2.5 py-0.5 rounded bg-[#ffc300]/15 text-[#ffc300] border border-[#ffc300]/30 font-semibold">
                  {resource.type} • {resource.language}
                </span>
                <span className="text-xs font-mono-code text-[#e0eaff]/70">
                  📥 {resource.downloads.toLocaleString()} descargas
                </span>
              </div>

              <h3 className={`font-serif-display text-xl sm:text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
                {resource.title}
              </h3>

              <p className="text-xs text-[#e0eaff]/70 font-mono-code mb-3">
                {lang === 'es' ? 'Autor:' : 'Author:'} {resource.author}
              </p>

              <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${isDark ? 'text-[#e0eaff]/85' : 'text-[#041b47]/80'}`}>
                {resource.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {resource.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-[#041b47] text-[#e0eaff] border border-[#e0eaff]/15"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Code Snippet Box with Copy Button */}
              {resource.snippet && (
                <div className="relative rounded-xl overflow-hidden bg-[#02102e] border border-[#e0eaff]/15 p-3.5 mb-4">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10 text-[11px] font-mono-code text-[#e0eaff]/70 mb-2">
                    <span>{resource.language} Code Preview</span>
                    <button
                      onClick={() => handleCopySnippet(resource.id, resource.snippet!)}
                      className="px-2 py-0.5 rounded bg-white/10 hover:bg-white/20 text-[#ffc300] flex items-center gap-1 text-[10px]"
                    >
                      {copiedId === resource.id ? <Check className="w-3 h-3 text-[#ffc300]" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedId === resource.id ? '¡Copiado!' : 'Copiar'}</span>
                    </button>
                  </div>
                  <pre className="text-[11px] font-mono-code text-[#e0eaff] overflow-x-auto max-h-36">
                    {resource.snippet}
                  </pre>
                </div>
              )}
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono-code text-[#e0eaff]/70">
                📦 {resource.downloadSize}
              </span>
              <button
                onClick={() => alert(lang === 'es' ? `Descargando paquete de ${resource.title}...` : `Downloading ${resource.title}...`)}
                className="px-4 py-2 bg-[#ffc300] hover:bg-[#ffd033] text-[#041b47] font-mono-code text-xs uppercase font-bold rounded flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
              >
                <Download className="w-3.5 h-3.5 text-[#041b47]" />
                <span>{lang === 'es' ? 'Descargar Paquete' : 'Download Package'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Reproducibility Checklist Section */}
      <div className={`p-8 rounded-3xl border ${
        isDark ? 'glass-panel border-[#e0eaff]/15' : 'bg-white border-[#041b47]/15 shadow-sm'
      }`}>
        <div className="max-w-2xl">
          <span className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded bg-[#ffc300]/15 text-[#ffc300] border border-[#ffc300]/30 font-semibold">
            {lang === 'es' ? 'Protocolo AEA Data Editor' : 'Open Science Standard'}
          </span>
          <h3 className={`font-serif-display text-2xl font-bold mt-2 mb-3 ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
            {lang === 'es' ? 'Checklist de Reproducibilidad Empírica' : 'Empirical Reproducibility Checklist'}
          </h3>
          <p className={`text-xs mb-6 ${isDark ? 'text-[#e0eaff]/85' : 'text-[#041b47]/80'}`}>
            {lang === 'es'
              ? 'Todos los proyectos desarrollados en EcoLab deben cumplir con los siguientes 4 principios antes de ser enviados a revisión por pares:'
              : 'All research produced at EcoLab complies with these core replication standards:'}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Datos crudos intactos con checksum MD5 y código de limpieza 100% automatizado.',
              'Fijación estricta de semilla aleatoria (set.seed) para bootstrap o simulaciones.',
              'Documentación de paquetes y versiones en archivo renv.lock / requirements.txt.',
              'Script maestro (master.do / run_all.R) que genera todos los gráficos con un solo clic.'
            ].map((check, idx) => (
              <div key={idx} className={`flex items-start gap-2.5 text-xs p-2.5 rounded-lg border ${
                isDark ? 'bg-[#02102e]/70 border-[#e0eaff]/10 text-[#e0eaff]' : 'bg-[#e0eaff]/30 border-[#041b47]/10 text-[#041b47]'
              }`}>
                <CheckCircle className="w-4 h-4 text-[#ffc300] shrink-0 mt-0.5" />
                <span>{check}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
