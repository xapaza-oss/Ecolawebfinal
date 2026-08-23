import React, { useState, useEffect } from 'react';
import { Search, X, BookOpen, User, FileText, Database, ArrowRight } from 'lucide-react';
import { COURSES_DATA, MENTORS_DATA, PROJECTS_DATA, DATASETS_DATA } from '../../data/mockData';
import { NavSection } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (section: NavSection) => void;
  isDark: boolean;
  lang: 'es' | 'en';
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate,
  isDark,
  lang
}) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        // Toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredCourses = COURSES_DATA.filter(
    (c) =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.track.toLowerCase().includes(query.toLowerCase()) ||
      c.tools.some((t) => t.toLowerCase().includes(query.toLowerCase()))
  );

  const filteredMentors = MENTORS_DATA.filter(
    (m) =>
      m.name.toLowerCase().includes(query.toLowerCase()) ||
      m.specialties.some((s) => s.toLowerCase().includes(query.toLowerCase())) ||
      m.department.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProjects = PROJECTS_DATA.filter(
    (p) =>
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.category.toLowerCase().includes(query.toLowerCase()) ||
      p.abstract.toLowerCase().includes(query.toLowerCase())
  );

  const filteredDatasets = DATASETS_DATA.filter(
    (d) =>
      d.title.toLowerCase().includes(query.toLowerCase()) ||
      d.category.toLowerCase().includes(query.toLowerCase())
  );

  const totalResults =
    filteredCourses.length + filteredMentors.length + filteredProjects.length + filteredDatasets.length;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div
        className={`relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl border ${
          isDark
            ? 'bg-[#041b47] border-[#e0eaff]/20 text-[#e0eaff]'
            : 'bg-white border-[#041b47]/20 text-[#041b47]'
        }`}
      >
        {/* Search Input Bar */}
        <div className="p-4 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#ffc300] shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder={
              lang === 'es'
                ? 'Buscar cursos, investigadores, papers, datos o código (ej. Inferencia Causal, PIB, Stata)...'
                : 'Search courses, researchers, papers, data or code...'
            }
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent border-none text-base text-white placeholder:text-[#e0eaff]/50 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-[#e0eaff]/70 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 rounded bg-white/10 text-xs font-mono-code text-[#e0eaff]"
          >
            ESC
          </button>
        </div>

        {/* Results Body */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-4">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-[#e0eaff]/70 text-sm">
              <p className="font-mono-code text-xs uppercase tracking-wider mb-2 text-[#ffc300] font-semibold">
                {lang === 'es' ? 'Búsquedas Sugeridas' : 'Popular Searches'}
              </p>
              <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto">
                {['Inferencia Causal', 'Microeconometría R', 'Modelos DSGE', 'Nowcasting PIB', 'Encuestas de Hogares', 'Diferencias en Diferencias'].map(
                  (tag, i) => (
                    <button
                      key={i}
                      onClick={() => setQuery(tag)}
                      className="px-2.5 py-1 rounded bg-[#02102e] hover:bg-[#ffc300]/20 text-xs font-mono-code text-[#e0eaff] hover:text-[#ffc300] transition-colors border border-[#e0eaff]/15"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          ) : totalResults === 0 ? (
            <div className="py-12 text-center text-[#e0eaff]/70 text-sm">
              <p>{lang === 'es' ? `No se encontraron resultados para "${query}"` : `No results found for "${query}"`}</p>
            </div>
          ) : (
            <>
              {/* Courses */}
              {filteredCourses.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-mono-code uppercase text-[#ffc300] tracking-wider mb-2 flex items-center gap-1.5 font-semibold">
                    <BookOpen className="w-3.5 h-3.5 text-[#ffc300]" />
                    {lang === 'es' ? 'Formación & Cursos' : 'Courses & Seminars'} ({filteredCourses.length})
                  </h4>
                  <div className="space-y-1.5">
                    {filteredCourses.map((c) => (
                      <div
                        key={c.id}
                        onClick={() => {
                          onClose();
                          onNavigate('formacion');
                        }}
                        className="p-3 rounded-lg bg-[#02102e]/70 hover:bg-[#ffc300]/15 border border-[#e0eaff]/10 hover:border-[#ffc300]/40 cursor-pointer flex items-center justify-between group transition-all"
                      >
                        <div>
                          <p className="font-medium text-sm text-white group-hover:text-[#ffc300]">
                            {c.title}
                          </p>
                          <span className="text-xs text-[#e0eaff]/70 font-mono-code">
                            {c.track} • {c.level} • {c.duration}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#e0eaff]/50 group-hover:text-[#ffc300] group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects */}
              {filteredProjects.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-mono-code uppercase text-[#ffc300] tracking-wider mb-2 flex items-center gap-1.5 font-semibold">
                    <FileText className="w-3.5 h-3.5 text-[#ffc300]" />
                    {lang === 'es' ? 'Papers & Proyectos' : 'Projects & Papers'} ({filteredProjects.length})
                  </h4>
                  <div className="space-y-1.5">
                    {filteredProjects.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => {
                          onClose();
                          onNavigate('proyectos');
                        }}
                        className="p-3 rounded-lg bg-[#02102e]/70 hover:bg-[#ffc300]/15 border border-[#e0eaff]/10 hover:border-[#ffc300]/40 cursor-pointer flex items-center justify-between group transition-all"
                      >
                        <div>
                          <p className="font-medium text-sm text-white group-hover:text-[#ffc300] line-clamp-1">
                            {p.title}
                          </p>
                          <span className="text-xs text-[#e0eaff]/70 font-mono-code">
                            {p.category} ({p.year}) • {p.status}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#e0eaff]/50 group-hover:text-[#ffc300] group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Researchers */}
              {filteredMentors.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-mono-code uppercase text-[#ffc300] tracking-wider mb-2 flex items-center gap-1.5 font-semibold">
                    <User className="w-3.5 h-3.5 text-[#ffc300]" />
                    {lang === 'es' ? 'Mentores & Docentes' : 'Mentors & Faculty'} ({filteredMentors.length})
                  </h4>
                  <div className="space-y-1.5">
                    {filteredMentors.map((m) => (
                      <div
                        key={m.id}
                        onClick={() => {
                          onClose();
                          onNavigate('mentores');
                        }}
                        className="p-3 rounded-lg bg-[#02102e]/70 hover:bg-[#ffc300]/15 border border-[#e0eaff]/10 hover:border-[#ffc300]/40 cursor-pointer flex items-center justify-between group transition-all"
                      >
                        <div>
                          <p className="font-medium text-sm text-white group-hover:text-[#ffc300]">
                            {m.name}
                          </p>
                          <span className="text-xs text-[#e0eaff]/70 font-mono-code">
                            {m.role} • {m.university}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#e0eaff]/50 group-hover:text-[#ffc300] group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Datasets */}
              {filteredDatasets.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-mono-code uppercase text-[#ffc300] tracking-wider mb-2 flex items-center gap-1.5 font-semibold">
                    <Database className="w-3.5 h-3.5 text-[#ffc300]" />
                    {lang === 'es' ? 'EcoLab Data Hub' : 'Data Hub'} ({filteredDatasets.length})
                  </h4>
                  <div className="space-y-1.5">
                    {filteredDatasets.map((d) => (
                      <div
                        key={d.id}
                        onClick={() => {
                          onClose();
                          onNavigate('data');
                        }}
                        className="p-3 rounded-lg bg-[#02102e]/70 hover:bg-[#ffc300]/15 border border-[#e0eaff]/10 hover:border-[#ffc300]/40 cursor-pointer flex items-center justify-between group transition-all"
                      >
                        <div>
                          <p className="font-medium text-sm text-white group-hover:text-[#ffc300]">
                            {d.title}
                          </p>
                          <span className="text-xs text-[#e0eaff]/70 font-mono-code">
                            {d.category} • {d.frequency}
                          </span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#e0eaff]/50 group-hover:text-[#ffc300] group-hover:translate-x-1 transition-all" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
