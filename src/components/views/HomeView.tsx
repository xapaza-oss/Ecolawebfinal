import React from 'react';
import { Hero } from '../Hero';
import { WhatIsEcoLab } from '../WhatIsEcoLab';
import { EconomicTicker } from '../EconomicTicker';
import { COURSES_DATA, PROJECTS_DATA, LAB_STATS, DATASETS_DATA } from '../../data/mockData';
import { NavSection, PillarDetail, Project, Course } from '../../types';
import { ArrowRight, BookOpen, FileText, Database, Users, GraduationCap, Award, ExternalLink, Sparkles } from 'lucide-react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface HomeViewProps {
  isDark: boolean;
  onNavigate: (section: NavSection) => void;
  onSelectPillar: (pillar: PillarDetail) => void;
  onSelectProject: (project: Project) => void;
  onSelectCourse: (course: Course) => void;
  onOpenJoin: () => void;
  lang: 'es' | 'en';
}

export const HomeView: React.FC<HomeViewProps> = ({
  isDark,
  onNavigate,
  onSelectPillar,
  onSelectProject,
  onSelectCourse,
  onOpenJoin,
  lang
}) => {
  const featuredCourses = COURSES_DATA.slice(0, 2);
  const featuredProjects = PROJECTS_DATA.slice(0, 2);
  const macroData = DATASETS_DATA[0]?.data.slice(-12) || [];

  return (
    <div className="w-full">
      {/* 1. Hero matching mockup */}
      <Hero
        isDark={isDark}
        onExplore={() => {
          const el = document.getElementById('que-es-ecolab');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onJoin={onOpenJoin}
        lang={lang}
      />

      {/* 2. Live Economic Indicators Ticker */}
      <EconomicTicker isDark={isDark} lang={lang} />

      {/* 3. What is EcoLab (5 Pillars Grid) */}
      <WhatIsEcoLab
        isDark={isDark}
        onSelectPillar={onSelectPillar}
        onNavigate={onNavigate}
        lang={lang}
      />

      {/* 4. Laboratory Real Numbers & Key Statistics */}
      <section className={`py-16 border-y ${
        isDark ? 'bg-[#041b47]/60 border-[#e0eaff]/15' : 'bg-[#e0eaff]/30 border-[#041b47]/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <span className="font-serif-display text-4xl sm:text-5xl font-bold text-[#ffc300] block mb-1">
                +1,450
              </span>
              <span className="font-mono-code text-xs uppercase tracking-wider text-[#e0eaff]/80">
                {lang === 'es' ? 'Estudiantes Capacitados' : 'Students Trained'}
              </span>
            </div>

            <div className="p-4">
              <span className="font-serif-display text-4xl sm:text-5xl font-bold text-white block mb-1">
                48
              </span>
              <span className="font-mono-code text-xs uppercase tracking-wider text-[#e0eaff]/80">
                {lang === 'es' ? 'Papers y Publicaciones Q1/Q2' : 'Q1/Q2 Publications'}
              </span>
            </div>

            <div className="p-4">
              <span className="font-serif-display text-4xl sm:text-5xl font-bold text-[#ffc300] block mb-1">
                +120
              </span>
              <span className="font-mono-code text-xs uppercase tracking-wider text-[#e0eaff]/80">
                {lang === 'es' ? 'Datasets Abiertos Curados' : 'Curated Open Datasets'}
              </span>
            </div>

            <div className="p-4">
              <span className="font-serif-display text-4xl sm:text-5xl font-bold text-white block mb-1">
                28
              </span>
              <span className="font-mono-code text-xs uppercase tracking-wider text-[#e0eaff]/80">
                {lang === 'es' ? 'Universidades Asociadas' : 'Partner Universities'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Research Spotlight & Observatory Preview */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Recent Papers */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono-code uppercase text-[#ffc300] font-semibold tracking-wider block">
                  {lang === 'es' ? 'Investigación Destacada' : 'Featured Research'}
                </span>
                <h3 className={`font-serif-display text-2xl sm:text-3xl font-bold mt-1 ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
                  {lang === 'es' ? 'Últimos Working Papers' : 'Latest Working Papers'}
                </h3>
              </div>

              <button
                onClick={() => onNavigate('proyectos')}
                className="text-xs font-mono-code text-[#ffc300] hover:underline flex items-center gap-1 group"
              >
                <span>{lang === 'es' ? 'Ver todos los papers' : 'View all papers'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            <div className="space-y-4">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className={`p-6 rounded-xl border transition-all cursor-pointer group ${
                    isDark
                      ? 'glass-panel hover:border-[#ffc300]/50 hover:bg-[#07225b]'
                      : 'bg-white border-[#041b47]/15 hover:shadow-md'
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded bg-[#ffc300]/15 text-[#ffc300] border border-[#ffc300]/30 font-semibold">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono-code text-[#e0eaff]/70">
                      {project.year} • {project.status}
                    </span>
                  </div>

                  <h4 className="font-serif-display text-lg font-bold text-white group-hover:text-[#ffc300] transition-colors mb-2">
                    {project.title}
                  </h4>

                  <p className="text-xs text-[#e0eaff]/80 line-clamp-2 leading-relaxed mb-4">
                    {project.abstract}
                  </p>

                  <div className="flex items-center justify-between text-xs font-mono-code text-[#e0eaff]/70 border-t border-white/5 pt-3">
                    <span>{project.authors[0]?.name} et al.</span>
                    <span className="text-[#ffc300] group-hover:underline flex items-center gap-1">
                      {lang === 'es' ? 'Ver Paper y Datos' : 'Read Paper'} &rarr;
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Live Data Observatory Mini Widget */}
          <div className="lg:col-span-5">
            <div className={`p-6 rounded-2xl border ${
              isDark ? 'glass-panel border-[#e0eaff]/15' : 'bg-white border-[#041b47]/15 shadow-sm'
            }`}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded bg-[#ffc300]/15 text-[#ffc300] border border-[#ffc300]/30 font-semibold">
                    EcoLab Data Live
                  </span>
                  <h4 className={`font-serif-display text-xl font-bold mt-1 ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
                    {lang === 'es' ? 'Tendencia Macroeconómica' : 'Macroeconomic Trend'}
                  </h4>
                </div>
                <button
                  onClick={() => onNavigate('data')}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-[#ffc300]/20 text-[#ffc300] text-xs font-mono-code flex items-center gap-1"
                >
                  <span>{lang === 'es' ? 'Observatorio' : 'Data Hub'}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

              <p className="text-xs text-[#e0eaff]/75 mb-4">
                {lang === 'es'
                  ? 'Evolución trimestral de Inflación (%) vs Tasa de Interés de Referencia (TPM) en la región.'
                  : 'Quarterly Inflation (%) vs Central Bank Policy Rate in Latin America.'}
              </p>

              {/* Chart */}
              <div className="h-52 w-full bg-[#02102e]/60 p-2 rounded-xl border border-[#e0eaff]/10 mb-4">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={macroData} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#07225b" />
                    <XAxis dataKey="date" stroke="#e0eaff" fontSize={10} />
                    <YAxis stroke="#e0eaff" fontSize={10} />
                    <Tooltip
                      contentStyle={{ backgroundColor: '#041b47', borderColor: '#ffc300', borderRadius: '8px', fontSize: '11px', color: '#ffffff' }}
                    />
                    <Line type="monotone" dataKey="inflation" name="Inflación (%)" stroke="#ffc300" strokeWidth={2.5} dot={{ r: 2 }} />
                    <Line type="monotone" dataKey="interestRate" name="Tasa TPM (%)" stroke="#e0eaff" strokeWidth={2} dot={{ r: 2 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="flex items-center justify-between text-xs font-mono-code pt-2 border-t border-white/5">
                <div className="flex items-center gap-2 text-[#e0eaff]/80">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffc300]" /> Inflación
                  <span className="w-2.5 h-2.5 rounded-full bg-[#e0eaff] ml-2" /> Tasa TPM
                </div>
                <button
                  onClick={() => onNavigate('data')}
                  className="text-[#ffc300] font-semibold hover:underline text-xs"
                >
                  {lang === 'es' ? 'Explorar 120+ Datasets' : 'Explore Datasets'} &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Upcoming Bootcamps & Seminars */}
      <section className={`py-16 border-t ${
        isDark ? 'bg-[#041b47]/40 border-[#e0eaff]/15' : 'bg-[#e0eaff]/20 border-[#041b47]/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-[11px] font-mono-code uppercase text-[#ffc300] font-semibold tracking-wider block">
                {lang === 'es' ? 'Semilleros & Talleres' : 'Workshops & Bootcamps'}
              </span>
              <h3 className={`font-serif-display text-2xl sm:text-4xl font-bold mt-1 ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
                {lang === 'es' ? 'Formación Práctica en Econometría' : 'Practical Econometric Training'}
              </h3>
            </div>

            <button
              onClick={() => onNavigate('formacion')}
              className="px-5 py-2.5 bg-[#ffc300]/15 hover:bg-[#ffc300]/25 text-[#ffc300] border border-[#ffc300]/30 font-mono-code text-xs uppercase font-bold rounded flex items-center gap-2 transition-all"
            >
              <span>{lang === 'es' ? 'Ver catálogo de cursos' : 'View full catalog'}</span>
              <ArrowRight className="w-4 h-4 text-[#ffc300]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredCourses.map((course) => (
              <div
                key={course.id}
                onClick={() => onSelectCourse(course)}
                className={`p-6 rounded-2xl border transition-all cursor-pointer group flex flex-col justify-between ${
                  isDark
                    ? 'glass-panel hover:border-[#ffc300]/50 hover:bg-[#07225b]'
                    : 'bg-white border-[#041b47]/15 hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono-code uppercase px-2.5 py-0.5 rounded bg-[#ffc300]/15 text-[#ffc300] border border-[#ffc300]/30 font-semibold">
                      {course.level} • {course.modality}
                    </span>
                    <span className="text-xs font-mono-code text-[#e0eaff]/75">
                      {course.duration} ({course.hours} hrs)
                    </span>
                  </div>

                  <h4 className="font-serif-display text-xl font-bold text-white group-hover:text-[#ffc300] transition-colors mb-2">
                    {course.title}
                  </h4>

                  <p className="text-xs text-[#e0eaff]/85 line-clamp-2 mb-4 leading-relaxed">
                    {course.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {course.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-[#041b47] text-[#e0eaff] border border-[#e0eaff]/15"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-mono-code text-[#e0eaff]/70">
                    {course.instructor}
                  </span>
                  <button className="px-4 py-1.5 bg-[#ffc300] hover:bg-[#ffd033] text-[#041b47] font-mono-code text-xs uppercase font-bold rounded flex items-center gap-1.5 shadow-sm">
                    <span>{lang === 'es' ? 'Inscribirme' : 'Enroll'}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#041b47]" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Call To Action Banner */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-8">
        <div className="relative rounded-3xl p-8 sm:p-14 overflow-hidden border border-[#ffc300]/40 bg-gradient-to-r from-[#041b47] via-[#07225b] to-[#041b47] shadow-[0_0_50px_rgba(4,27,71,0.5)] text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffc300]/15 border border-[#ffc300]/40 text-[#ffc300] font-mono-code text-xs uppercase tracking-widest mb-6 font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#ffc300]" />
            <span>{lang === 'es' ? 'Semillero de Investigación 2026' : 'Research Fellowship 2026'}</span>
          </div>

          <h3 className="font-serif-display text-3xl sm:text-5xl font-bold text-white max-w-2xl mb-4 leading-tight">
            {lang === 'es'
              ? 'Convierte tus ideas en publicaciones y evidencia económica'
              : 'Transform your research questions into publications & evidence'}
          </h3>

          <p className="font-sans text-base sm:text-lg text-[#e0eaff]/85 max-w-xl mb-8 leading-relaxed">
            {lang === 'es'
              ? 'Únete a nuestra red de mentores internacionales, accede a microdatos curados y publica en los principales journals de economía.'
              : 'Join our international network of researchers, access clean microdata, and collaborate on cutting-edge economic papers.'}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onOpenJoin}
              className="px-8 py-3.5 bg-[#ffc300] hover:bg-[#ffd033] text-[#041b47] font-mono-code text-xs sm:text-sm uppercase font-bold tracking-wider rounded shadow-[0_0_20px_rgba(255,195,0,0.5)] active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <span>{lang === 'es' ? 'Postular a EcoLab' : 'Apply to EcoLab'}</span>
              <ArrowRight className="w-4 h-4 text-[#041b47]" />
            </button>

            <button
              onClick={() => onNavigate('mentores')}
              className="px-8 py-3.5 bg-transparent hover:bg-white/10 text-white border border-[#e0eaff]/30 hover:border-[#ffc300] font-mono-code text-xs sm:text-sm uppercase font-semibold tracking-wider rounded transition-all"
            >
              {lang === 'es' ? 'Conocer a los Mentores' : 'Meet the Mentors'}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
