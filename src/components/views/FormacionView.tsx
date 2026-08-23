import React, { useState } from 'react';
import { COURSES_DATA } from '../../data/mockData';
import { Course } from '../../types';
import { BookOpen, Clock, Calendar, Search, Filter, CheckCircle2, ChevronDown, ChevronUp, ArrowRight, Sparkles } from 'lucide-react';

interface FormacionViewProps {
  isDark: boolean;
  onSelectCourse: (course: Course) => void;
  lang: 'es' | 'en';
}

export const FormacionView: React.FC<FormacionViewProps> = ({
  isDark,
  onSelectCourse,
  lang
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTrack, setSelectedTrack] = useState<string>('all');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  const [expandedSyllabus, setExpandedSyllabus] = useState<string | null>(null);

  const tracks = [
    { id: 'all', label: lang === 'es' ? 'Todos los Tracks' : 'All Tracks' },
    { id: 'Políticas Públicas & Causalidad', label: 'Inferencia Causal & Políticas' },
    { id: 'Econometría & Datos', label: 'Machine Learning & Datos' },
    { id: 'Macroeconomía Cuantitativa', label: 'Macroeconomía DSGE' },
    { id: 'Economía Conductual', label: 'Economía Conductual & RCTs' }
  ];

  const levels = [
    { id: 'all', label: lang === 'es' ? 'Todos los Niveles' : 'All Levels' },
    { id: 'Iniciación', label: 'Iniciación' },
    { id: 'Intermedio', label: 'Intermedio' },
    { id: 'Avanzado', label: 'Avanzado' }
  ];

  const filteredCourses = COURSES_DATA.filter((course) => {
    const matchesQuery =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTrack = selectedTrack === 'all' || course.track === selectedTrack;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;

    return matchesQuery && matchesTrack && matchesLevel;
  });

  return (
    <div 
    style={{ backgroundImage: "url('/activos/fondo.jpeg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    className="py-12 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen"
  >
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffc300]/15 border border-[#ffc300]/40 text-[#ffc300] font-mono-code text-xs uppercase tracking-widest mb-4 font-semibold">
          <BookOpen className="w-3.5 h-3.5" />
          <span>{lang === 'es' ? 'Semilleros & Capacitación 2026' : 'Fellowships & Bootcamps'}</span>
        </div>
        <h2 className={`font-serif-display text-3xl sm:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
          {lang === 'es' ? 'Formación en Econometría y Ciencia de Datos' : 'Econometrics & Data Science Training'}
        </h2>
        <p className={`font-sans text-base sm:text-lg ${isDark ? 'text-[#e0eaff]/85' : 'text-[#041b47]/85'}`}>
          {lang === 'es'
            ? 'Cursos intensivos, semilleros de investigación y talleres prácticos diseñados para transformar el rigor metodológico en publicaciones empíricas.'
            : 'Intensive courses and practical workshops designed to build causal modeling and computational skills.'}
        </p>
      </div>

      {/* Filters & Search */}
      <div className="space-y-4 mb-10">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3 top-3.5 text-[#e0eaff]/60" />
            <input
              type="text"
              placeholder={lang === 'es' ? 'Buscar curso o software (R, Stata, Python)...' : 'Search course or tool...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-[#ffc300] ${
                isDark ? 'bg-[#02102e]/80 border-[#e0eaff]/20 text-white' : 'bg-white border-[#041b47]/20 text-[#041b47]'
              }`}
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full sm:w-auto">
            {levels.map((lvl) => (
              <button
                key={lvl.id}
                onClick={() => setSelectedLevel(lvl.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code transition-all border ${
                  selectedLevel === lvl.id
                    ? 'bg-[#ffc300] text-[#041b47] border-[#ffc300] font-bold'
                    : isDark
                      ? 'bg-white/5 border-white/10 text-[#e0eaff]/70 hover:text-white'
                      : 'bg-white border-[#041b47]/15 text-[#041b47]/70 hover:text-[#041b47]'
                }`}
              >
                {lvl.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tracks Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {tracks.map((track) => (
            <button
              key={track.id}
              onClick={() => setSelectedTrack(track.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono-code whitespace-nowrap transition-all border ${
                selectedTrack === track.id
                  ? 'bg-[#ffc300]/15 border-[#ffc300] text-[#ffc300] font-bold'
                  : isDark
                    ? 'bg-white/5 border-white/10 text-[#e0eaff]/70 hover:bg-white/10'
                    : 'bg-white border-[#041b47]/15 text-[#041b47]/75 hover:bg-[#e0eaff]/30'
              }`}
            >
              {track.label}
            </button>
          ))}
        </div>
      </div>

      {/* Courses Grid */}
      {filteredCourses.length === 0 ? (
        <div className="py-20 text-center text-[#e0eaff]/60">
          <p className="text-base">{lang === 'es' ? 'No se encontraron cursos con los filtros seleccionados.' : 'No courses found matching filters.'}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCourses.map((course) => {
            const isSyllabusOpen = expandedSyllabus === course.id;
            return (
              <div
                key={course.id}
                className={`p-6 sm:p-8 rounded-2xl border transition-all flex flex-col justify-between ${
                  isDark
                    ? 'glass-panel border-[#e0eaff]/15 hover:border-[#ffc300]/50'
                    : 'bg-white border-[#041b47]/15 shadow-md'
                }`}
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-mono-code uppercase px-2.5 py-1 rounded bg-[#ffc300]/15 text-[#ffc300] border border-[#ffc300]/30 font-semibold">
                      {course.track}
                    </span>
                    <span className="text-xs font-mono-code text-[#e0eaff]/70">
                      {course.level} • {course.modality}
                    </span>
                  </div>

                  <h3 className={`font-serif-display text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
                    {course.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${isDark ? 'text-[#e0eaff]/85' : 'text-[#041b47]/80'}`}>
                    {course.description}
                  </p>

                  {/* Instructor & Meta */}
                  <div className={`p-3.5 rounded-xl border space-y-1 mb-4 text-xs font-mono-code ${
                    isDark ? 'bg-[#02102e]/70 border-[#e0eaff]/10' : 'bg-[#e0eaff]/30 border-[#041b47]/10'
                  }`}>
                    <div className={isDark ? 'text-white' : 'text-[#041b47]'}>
                      <span className="text-[#ffc300] font-bold">{lang === 'es' ? 'Docente:' : 'Instructor:'}</span> {course.instructor}
                    </div>
                    <div className="text-[#e0eaff]/70 text-[11px]">
                      {course.instructorRole} ({course.instructorAffiliation})
                    </div>
                    <div className="flex flex-wrap gap-4 pt-2 text-[#e0eaff]/80 text-[11px]">
                      <span>⏱ {course.duration} ({course.hours} hrs)</span>
                      <span>🗓 {lang === 'es' ? 'Inicia:' : 'Starts:'} {course.startDate}</span>
                      <span>👥 {course.enrolledCount} {lang === 'es' ? 'estudiantes' : 'enrolled'}</span>
                    </div>
                  </div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {course.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded text-xs font-mono-code bg-[#041b47] border border-[#e0eaff]/15 text-[#e0eaff]"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Syllabus Toggle Accordion */}
                  <div className="border-t border-white/10 pt-3 mb-4">
                    <button
                      onClick={() => setExpandedSyllabus(isSyllabusOpen ? null : course.id)}
                      className="w-full flex items-center justify-between text-xs font-mono-code text-[#ffc300] hover:underline"
                    >
                      <span>
                        {isSyllabusOpen
                          ? lang === 'es' ? 'Ocultar Temario Detallado' : 'Hide Syllabus'
                          : lang === 'es' ? 'Ver Temario y Prácticas Semanales' : 'View Weekly Syllabus'}
                      </span>
                      {isSyllabusOpen ? <ChevronUp className="w-4 h-4 text-[#ffc300]" /> : <ChevronDown className="w-4 h-4 text-[#ffc300]" />}
                    </button>

                    {isSyllabusOpen && (
                      <div className="mt-3 space-y-2 max-h-48 overflow-y-auto pr-1">
                        {course.syllabus.map((item) => (
                          <div key={item.week} className="p-2.5 rounded bg-[#02102e]/90 text-xs border border-[#e0eaff]/10">
                            <span className="font-mono-code text-[#ffc300] font-bold">Semana {item.week}: </span>
                            <span className="text-white font-medium">{item.topic}</span>
                            <p className="text-[11px] text-[#e0eaff]/75 font-mono-code mt-0.5">🛠 Práctica: {item.practicalWork}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-mono-code text-[#ffc300] font-bold uppercase">
                    {lang === 'es' ? 'Acceso Becado / Gratuito' : 'Full Scholarship / Free'}
                  </span>
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="px-5 py-2.5 bg-[#ffc300] hover:bg-[#ffd033] text-[#041b47] font-mono-code text-xs uppercase font-bold tracking-wider rounded flex items-center gap-2 shadow-sm active:scale-95 transition-all"
                  >
                    <span>{lang === 'es' ? 'Inscribirme al Curso' : 'Enroll in Course'}</span>
                    <ArrowRight className="w-4 h-4 text-[#041b47]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
