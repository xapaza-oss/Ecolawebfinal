import React from 'react';
import { EQUIPO_DATA } from '../../data/mockData';
import { Users2 } from 'lucide-react';
import fondoEquipo from '../../../assets/fondo.jpeg';

interface EquipoEcolabViewProps {
  isDark: boolean;
  lang: 'es' | 'en';
}

export const EquipoEcolabView: React.FC<EquipoEcolabViewProps> = ({ isDark, lang }) => {
  return (
    <div
      style={{ backgroundImage: `url(${fondoEquipo})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
      className="relative min-h-screen"
    >
      <div className={`absolute inset-0 ${isDark ? 'bg-[#041b47]/85' : 'bg-white/85'}`} />

      <div className="relative py-12 px-4 sm:px-8 max-w-7xl mx-auto min-h-screen">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffc300]/15 border border-[#ffc300]/40 text-[#ffc300] font-mono-code text-xs uppercase tracking-widest mb-4 font-semibold">
            <Users2 className="w-3.5 h-3.5" />
            <span>{lang === 'es' ? 'Nuestro Equipo' : 'Our Team'}</span>
          </div>
          <h2 className={`font-serif-display text-3xl sm:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
            {lang === 'es' ? 'Equipo EcoLab' : 'EcoLab Team'}
          </h2>
          <p className={`font-sans text-base sm:text-lg ${isDark ? 'text-[#e0eaff]/85' : 'text-[#041b47]/85'}`}>
            {lang === 'es' ? 'Las personas que coordinan y dan vida a EcoLab día a día.' : 'The people who coordinate and run EcoLab day to day.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {EQUIPO_DATA.map((member) => (
            <div
              key={member.id}
              className={`p-6 rounded-2xl border transition-all ${
                isDark ? 'glass-panel border-[#e0eaff]/15 hover:border-[#ffc300]/50' : 'bg-white border-[#041b47]/15 shadow-md'
              }`}
            >
              <img
                src={member.photoUrl}
                alt={member.name}
                referrerPolicy="no-referrer"
                className="w-24 h-24 rounded-2xl object-cover border-2 border-[#ffc300]/60 shadow-md mb-4 mx-auto sm:mx-0"
              />
              <h3 className={`font-serif-display text-lg sm:text-xl font-bold text-center sm:text-left ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
                {member.name}
              </h3>
              <p className="text-xs font-mono-code text-[#ffc300] mb-3 text-center sm:text-left">
                {member.cvSummary}
              </p>
              <p className={`text-sm leading-relaxed text-center sm:text-left ${isDark ? 'text-[#e0eaff]/85' : 'text-[#041b47]/80'}`}>
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
