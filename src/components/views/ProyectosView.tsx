import React, { useState } from 'react';
import { PROJECTS_DATA } from '../../data/mockData';
import { Project } from '../../types';
import { FileText, Search, PlusCircle, Download, BookOpen, Layers, Sparkles, ArrowRight } from 'lucide-react';

interface ProyectosViewProps {
  isDark: boolean;
  onSelectProject: (project: Project) => void;
  lang: 'es' | 'en';
}

export const ProyectosView: React.FC<ProyectosViewProps> = ({
  isDark,
  onSelectProject,
  lang
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [showProposeModal, setShowProposeModal] = useState(false);
  const [proposalSent, setProposalSent] = useState(false);
  const [proposalData, setProposalData] = useState({
    title: '',
    author: '',
    email: '',
    category: 'Microeconometría',
    summary: ''
  });

  const categories = [
    'all',
    'Macroeconomía',
    'Microeconometría',
    'Economía Laboral',
    'Economía Conductual',
    'Economía Ambiental'
  ];

  const statuses = [
    { id: 'all', label: lang === 'es' ? 'Todos los Estados' : 'All Statuses' },
    { id: 'Publicado', label: lang === 'es' ? 'Publicados en Journal' : 'Published' },
    { id: 'Working Paper', label: 'Working Papers' },
    { id: 'En Desarrollo', label: lang === 'es' ? 'En Desarrollo' : 'In Progress' }
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    const matchesQuery =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.abstract.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.authors.some((a) => a.name.toLowerCase().includes(searchQuery.toLowerCase())) ||
      project.jelCodes.some((j) => j.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesStatus = selectedStatus === 'all' || project.status === selectedStatus;

    return matchesQuery && matchesCategory && matchesStatus;
  });

  const handleProposeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProposalSent(true);
  };

  return (
    <div className="py-12 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffc300]/15 border border-[#ffc300]/40 text-[#ffc300] font-mono-code text-xs uppercase tracking-widest mb-4 font-semibold">
          <FileText className="w-3.5 h-3.5" />
          <span>{lang === 'es' ? 'Repositorio de Investigación' : 'Research Repository'}</span>
        </div>
        <h2 className={`font-serif-display text-3xl sm:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
          {lang === 'es' ? 'Proyectos y Working Papers' : 'Research Projects & Working Papers'}
        </h2>
        <p className={`font-sans text-base sm:text-lg ${isDark ? 'text-[#e0eaff]/85' : 'text-[#041b47]/85'}`}>
          {lang === 'es'
            ? 'Explora publicaciones científicas, pre-prints y proyectos de tesis evaluados con microdatos reales y metodologías causales.'
            : 'Explore working papers, peer-reviewed publications, and active empirical projects.'}
        </p>
      </div>

      {/* Action Bar: Search, Filters & "Propose Project" Button */}
      <div className="space-y-4 mb-10">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3 top-3.5 text-[#e0eaff]/60" />
            <input
              type="text"
              placeholder={lang === 'es' ? 'Buscar por título, autor, código JEL...' : 'Search title, author, JEL code...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-[#ffc300] ${
                isDark ? 'bg-[#02102e]/80 border-[#e0eaff]/20 text-white' : 'bg-white border-[#041b47]/20 text-[#041b47]'
              }`}
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full sm:w-auto items-center">
            {statuses.map((st) => (
              <button
                key={st.id}
                onClick={() => setSelectedStatus(st.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code transition-all border ${
                  selectedStatus === st.id
                    ? 'bg-[#ffc300] text-[#041b47] border-[#ffc300] font-bold'
                    : isDark
                      ? 'bg-white/5 border-white/10 text-[#e0eaff]/70 hover:text-white'
                      : 'bg-white border-[#041b47]/15 text-[#041b47]/70 hover:text-[#041b47]'
                }`}
              >
                {st.label}
              </button>
            ))}

            <button
              onClick={() => {
                setProposalSent(false);
                setShowProposeModal(true);
              }}
              className="px-4 py-2 bg-[#ffc300] text-[#041b47] font-mono-code text-xs uppercase font-bold tracking-wider rounded flex items-center gap-1.5 hover:bg-[#ffd033] transition-all ml-auto sm:ml-2 shadow-sm"
            >
              <PlusCircle className="w-3.5 h-3.5 text-[#041b47]" />
              <span>{lang === 'es' ? 'Proponer Proyecto' : 'Propose Project'}</span>
            </button>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono-code whitespace-nowrap transition-all border ${
                selectedCategory === cat
                  ? 'bg-[#ffc300]/15 border-[#ffc300] text-[#ffc300] font-bold'
                  : isDark
                    ? 'bg-white/5 border-white/10 text-[#e0eaff]/70 hover:bg-white/10'
                    : 'bg-white border-[#041b47]/15 text-[#041b47]/75 hover:bg-[#e0eaff]/30'
              }`}
            >
              {cat === 'all' ? (lang === 'es' ? 'Todas las Áreas' : 'All Areas') : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project)}
            className={`p-6 sm:p-8 rounded-2xl border transition-all cursor-pointer group ${
              isDark
                ? 'glass-panel border-[#e0eaff]/15 hover:border-[#ffc300]/50 hover:bg-[#07225b]'
                : 'bg-white border-[#041b47]/15 hover:shadow-lg'
            }`}
          >
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-[10px] font-mono-code uppercase px-2.5 py-0.5 rounded bg-[#ffc300]/15 text-[#ffc300] border border-[#ffc300]/30 font-semibold">
                  {project.category}
                </span>
                <span className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded bg-[#041b47] text-[#e0eaff] border border-[#e0eaff]/15">
                  {project.status} • {project.year}
                </span>
                {project.journal && (
                  <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-[#ffc300]/20 text-[#ffc300] border border-[#ffc300]/40 font-semibold">
                    {project.journal}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 text-xs font-mono-code text-[#e0eaff]/70">
                <span>📥 {project.downloadsCount} descargas</span>
                <span>⭐ {project.citations} citas</span>
              </div>
            </div>

            <h3 className={`font-serif-display text-xl sm:text-2xl font-bold group-hover:text-[#ffc300] transition-colors mb-2 ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
              {project.title}
            </h3>

            <p className="text-xs font-mono-code text-[#e0eaff]/75 mb-3">
              {project.authors.map((a) => `${a.name} (${a.institution})`).join(' • ')}
            </p>

            <p className={`text-xs sm:text-sm leading-relaxed line-clamp-3 mb-4 ${isDark ? 'text-[#e0eaff]/85' : 'text-[#041b47]/80'}`}>
              {project.abstract}
            </p>

            {/* Methodology & JEL Tags */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/5">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-[11px] font-mono-code text-[#e0eaff]/70 mr-1">JEL:</span>
                {project.jelCodes.map((jel, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[10px] font-mono-code bg-[#041b47] text-[#e0eaff] border border-[#e0eaff]/15"
                  >
                    {jel}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-xs font-mono-code text-[#ffc300] group-hover:underline">
                <span>{lang === 'es' ? 'Ver metodología y datos interactivos' : 'View paper & interactive data'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#ffc300]" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Propose Project Modal */}
      {showProposeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl bg-[#041b47] border border-[#e0eaff]/20 p-6 sm:p-8 text-white">
            <h3 className="font-serif-display text-2xl font-bold text-white mb-2">
              {lang === 'es' ? 'Proponer Proyecto de Investigación' : 'Propose Research Project'}
            </h3>
            <p className="text-xs text-[#e0eaff]/80 mb-6">
              {lang === 'es'
                ? '¿Tienes una pregunta empírica o tema de tesis? Presenta tu propuesta para recibir financiamiento de microdatos y asignación de mentor.'
                : 'Submit your research proposal to access microdata support and mentor assignment.'}
            </p>

            {proposalSent ? (
              <div className="p-6 text-center space-y-4">
                <p className="text-sm text-[#ffc300] font-bold">
                  {lang === 'es' ? '¡Propuesta enviada exitosamente al Comité Científico!' : 'Proposal successfully sent to the Scientific Board!'}
                </p>
                <button
                  onClick={() => setShowProposeModal(false)}
                  className="px-5 py-2 bg-[#ffc300] text-[#041b47] text-xs font-mono-code uppercase font-bold rounded"
                >
                  {lang === 'es' ? 'Cerrar' : 'Close'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleProposeSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono-code uppercase text-[#e0eaff] mb-1">
                    {lang === 'es' ? 'Título Preliminar' : 'Working Title'} *
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Ej. Evaluación de impacto de subsidios solares en tarifas eléctricas"
                    value={proposalData.title}
                    onChange={(e) => setProposalData({ ...proposalData, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-[#02102e] border border-[#e0eaff]/20 text-sm text-white focus:outline-none focus:border-[#ffc300]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono-code uppercase text-[#e0eaff] mb-1">
                      {lang === 'es' ? 'Autor Principal' : 'Primary Author'} *
                    </label>
                    <input
                      required
                      type="text"
                      placeholder="Tu nombre"
                      value={proposalData.author}
                      onChange={(e) => setProposalData({ ...proposalData, author: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#02102e] border border-[#e0eaff]/20 text-sm text-white focus:outline-none focus:border-[#ffc300]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono-code uppercase text-[#e0eaff] mb-1">
                      {lang === 'es' ? 'Correo de Contacto' : 'Contact Email'} *
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="correo@universidad.edu"
                      value={proposalData.email}
                      onChange={(e) => setProposalData({ ...proposalData, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-[#02102e] border border-[#e0eaff]/20 text-sm text-white focus:outline-none focus:border-[#ffc300]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-code uppercase text-[#e0eaff] mb-1">
                    {lang === 'es' ? 'Resumen de Hipótesis y Metodología Estimada' : 'Hypothesis & Method'}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={lang === 'es' ? 'Explica qué pregunta deseas responder y qué base de datos pretendes utilizar...' : 'Explain the research question and empirical strategy...'}
                    value={proposalData.summary}
                    onChange={(e) => setProposalData({ ...proposalData, summary: e.target.value })}
                    className="w-full p-3 rounded-lg bg-[#02102e] border border-[#e0eaff]/20 text-sm text-white focus:outline-none focus:border-[#ffc300]"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowProposeModal(false)}
                    className="px-4 py-2 text-xs font-mono-code text-[#e0eaff]/70 hover:text-white"
                  >
                    {lang === 'es' ? 'Cancelar' : 'Cancel'}
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#ffc300] hover:bg-[#ffd033] text-[#041b47] text-xs font-mono-code uppercase font-bold rounded"
                  >
                    {lang === 'es' ? 'Enviar Propuesta' : 'Submit Proposal'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
