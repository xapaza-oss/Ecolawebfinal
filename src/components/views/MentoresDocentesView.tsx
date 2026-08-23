import React, { useState } from 'react';
import { MENTORS_DATA } from '../../data/mockData';
import { MentorDocente } from '../../types';
import { User, Users, Search, Mail, ExternalLink, Calendar, BookOpen, Sparkles, CheckCircle2 } from 'lucide-react';

interface MentoresDocentesViewProps {
  isDark: boolean;
  initialRoleFilter?: 'all' | 'docente' | 'mentor';
  onSelectMentor: (mentor: MentorDocente) => void;
  lang: 'es' | 'en';
}

export const MentoresDocentesView: React.FC<MentoresDocentesViewProps> = ({
  isDark,
  initialRoleFilter = 'all',
  onSelectMentor,
  lang
}) => {
  const [roleFilter, setRoleFilter] = useState<'all' | 'docente' | 'mentor'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>('all');

  const specialties = [
    'all',
    'Inferencia Causal',
    'Macroeconomía Cuantitativa',
    'Economía del Comportamiento',
    'Machine Learning Económico',
    'Economía Laboral',
    'Economía Ambiental'
  ];

  const filteredMentors = MENTORS_DATA.filter((mentor) => {
    const matchesQuery =
      mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.university.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mentor.specialties.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesRole =
      roleFilter === 'all'
        ? true
        : roleFilter === 'docente'
        ? mentor.role === 'Docente Investigador'
        : mentor.role === 'Mentor Senior' || mentor.role === 'Asistente de Investigación';

    const matchesSpecialty =
      selectedSpecialty === 'all' || mentor.specialties.some((s) => s.includes(selectedSpecialty));

    return matchesQuery && matchesRole && matchesSpecialty;
  });

  return (
    <div className="py-12 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen">
      {/* Header Banner */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffc300]/15 border border-[#ffc300]/40 text-[#ffc300] font-mono-code text-xs uppercase tracking-widest mb-4 font-semibold">
          <Users className="w-3.5 h-3.5" />
          <span>{lang === 'es' ? 'Red Académica & Científica' : 'Academic & Research Network'}</span>
        </div>
        <h2 className={`font-serif-display text-3xl sm:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
          {lang === 'es' ? 'Docentes e Investigadores' : 'Faculty & Research Mentors'}
        </h2>
        <p className={`font-sans text-base sm:text-lg ${isDark ? 'text-[#e0eaff]/85' : 'text-[#041b47]/85'}`}>
          {lang === 'es'
            ? 'Acompañamiento personalizado 1 a 1 de profesores titulares, doctores e investigadores en econometría, macroeconomía y diseño de políticas públicas.'
            : 'One-on-one academic mentorship from principal investigators and PhD economists.'}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="space-y-4 mb-10">
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 absolute left-3 top-3.5 text-[#e0eaff]/60" />
            <input
              type="text"
              placeholder={lang === 'es' ? 'Buscar por nombre, universidad o tema...' : 'Search by name, university or field...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-9 pr-4 py-2.5 rounded-xl border text-sm focus:outline-none focus:border-[#ffc300] ${
                isDark ? 'bg-[#02102e]/80 border-[#e0eaff]/20 text-white' : 'bg-white border-[#041b47]/20 text-[#041b47]'
              }`}
            />
          </div>

          {/* Role Filter Tabs */}
          <div className="flex gap-2 w-full sm:w-auto">
            {[
              { id: 'all', label: lang === 'es' ? 'Todos' : 'All' },
              { id: 'docente', label: lang === 'es' ? 'Docentes Titulares' : 'Faculty' },
              { id: 'mentor', label: lang === 'es' ? 'Mentores Senior' : 'Mentors' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setRoleFilter(tab.id as any)}
                className={`px-4 py-2 rounded-lg text-xs font-mono-code transition-all border ${
                  roleFilter === tab.id
                    ? 'bg-[#ffc300] text-[#041b47] border-[#ffc300] font-bold'
                    : isDark
                      ? 'bg-white/5 border-white/10 text-[#e0eaff]/70 hover:text-white'
                      : 'bg-white border-[#041b47]/15 text-[#041b47]/70 hover:text-[#041b47]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Specialties Tags */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {specialties.map((spec) => (
            <button
              key={spec}
              onClick={() => setSelectedSpecialty(spec)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono-code whitespace-nowrap transition-all border ${
                selectedSpecialty === spec
                  ? 'bg-[#ffc300]/15 border-[#ffc300] text-[#ffc300] font-bold'
                  : isDark
                    ? 'bg-white/5 border-white/10 text-[#e0eaff]/70 hover:bg-white/10'
                    : 'bg-white border-[#041b47]/15 text-[#041b47]/75 hover:bg-[#e0eaff]/30'
              }`}
            >
              {spec === 'all' ? (lang === 'es' ? 'Todas las Áreas' : 'All Specialties') : spec}
            </button>
          ))}
        </div>
      </div>

      {/* Mentors Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMentors.map((mentor) => (
          <div
            key={mentor.id}
            className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
              isDark
                ? 'glass-panel border-[#e0eaff]/15 hover:border-[#ffc300]/50'
                : 'bg-white border-[#041b47]/15 shadow-md'
            }`}
          >
            <div>
              {/* Profile Top */}
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={mentor.avatar}
                  alt={mentor.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-2xl object-cover border-2 border-[#ffc300]/60 shadow-md shrink-0"
                />
                <div>
                  <span className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded bg-[#ffc300]/15 text-[#ffc300] border border-[#ffc300]/30 font-semibold">
                    {mentor.role}
                  </span>
                  <h3 className={`font-serif-display text-lg sm:text-xl font-bold mt-1 ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
                    {mentor.name}
                  </h3>
                  <p className="text-xs text-[#e0eaff]/70 font-mono-code">{mentor.title}</p>
                </div>
              </div>

              <div className="text-xs font-mono-code space-y-1 mb-3">
                <p className={isDark ? 'text-white' : 'text-[#041b47]'}>🏛 {mentor.university}</p>
                <p className="text-[11px] text-[#e0eaff]/70">{mentor.department}</p>
              </div>

              <p className={`text-xs leading-relaxed line-clamp-3 mb-4 ${isDark ? 'text-[#e0eaff]/85' : 'text-[#041b47]/80'}`}>
                {mentor.bio}
              </p>

              {/* Specialties */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {mentor.specialties.map((spec, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded text-[11px] font-mono-code bg-[#041b47] text-[#e0eaff] border border-[#e0eaff]/15"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Recent Publications */}
              {mentor.recentPublications.length > 0 && (
                <div className={`p-3 rounded-xl border text-xs mb-4 ${
                  isDark ? 'bg-[#02102e]/70 border-[#e0eaff]/10' : 'bg-[#e0eaff]/30 border-[#041b47]/10'
                }`}>
                  <span className="font-mono-code text-[10px] uppercase text-[#ffc300] font-semibold block mb-1">
                    {lang === 'es' ? 'Publicación Reciente:' : 'Recent Paper:'}
                  </span>
                  <p className={`text-[11px] line-clamp-1 italic font-serif-display ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
                    "{mentor.recentPublications[0].title}"
                  </p>
                  <span className="text-[10px] text-[#e0eaff]/70 font-mono-code">
                    {mentor.recentPublications[0].journal} ({mentor.recentPublications[0].year})
                  </span>
                </div>
              )}
            </div>

            {/* Bottom Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-[11px] font-mono-code text-[#ffc300] font-semibold">
                🕒 {mentor.availableHours}
              </span>
              <button
                onClick={() => onSelectMentor(mentor)}
                className="px-3.5 py-2 bg-[#ffc300] hover:bg-[#ffd033] text-[#041b47] font-mono-code text-xs uppercase font-bold rounded flex items-center gap-1.5 shadow-sm active:scale-95 transition-all"
              >
                <Calendar className="w-3.5 h-3.5 text-[#041b47]" />
                <span>{lang === 'es' ? 'Agendar' : 'Book'}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
