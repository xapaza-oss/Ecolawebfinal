import React, { useState } from 'react';
import { Course } from '../../types';
import { X, BookOpen, Clock, Calendar, CheckCircle2, Download, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface EnrollModalProps {
  course: Course | null;
  onClose: () => void;
  isDark: boolean;
  lang: 'es' | 'en';
}

export const EnrollModal: React.FC<EnrollModalProps> = ({
  course,
  onClose,
  isDark,
  lang
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    university: '',
    experienceLevel: 'Conozco R / Python básico'
  });
  const [enrolled, setEnrolled] = useState(false);

  if (!course) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnrolled(true);
    try {
      confetti({ particleCount: 60, spread: 70 });
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div
        className={`relative w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border ${
          isDark
            ? 'bg-[#041b47] border-[#e0eaff]/20 text-[#e0eaff]'
            : 'bg-white border-[#041b47]/20 text-[#041b47]'
        }`}
      >
        {/* Header */}
        <div className="p-6 pb-4 flex items-start justify-between border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded bg-[#ffc300]/15 text-[#ffc300] border border-[#ffc300]/30 font-semibold">
                {course.level} • {course.modality}
              </span>
            </div>
            <h3 className={`font-serif-display text-xl font-bold mt-1 ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
              {course.title}
            </h3>
            <p className="text-xs text-[#e0eaff]/70 font-mono-code mt-0.5">
              {course.instructor} • {course.duration} ({course.hours} hrs)
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-[#e0eaff]/70 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {enrolled ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-[#ffc300]/20 border border-[#ffc300]/40 text-[#ffc300] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className={`font-serif-display text-2xl font-bold ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
              {lang === 'es' ? '¡Inscripción Confirmada!' : 'Enrollment Confirmed!'}
            </h4>
            <p className={`text-sm ${isDark ? 'text-[#e0eaff]/85' : 'text-[#041b47]/80'}`}>
              {lang === 'es'
                ? `Te has inscrito exitosamente a "${course.title}". Iniciamos el ${course.startDate}. Se ha enviado el acceso al repositorio y syllabus a ${formData.email}.`
                : `You have enrolled in "${course.title}". We start on ${course.startDate}. Access details have been sent to ${formData.email}.`}
            </p>

            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => alert(lang === 'es' ? 'Descargando Syllabus PDF...' : 'Downloading Syllabus PDF...')}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-xs font-mono-code uppercase rounded flex items-center gap-1.5 text-[#ffc300]"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Syllabus PDF</span>
              </button>
              <button
                onClick={() => {
                  setEnrolled(false);
                  onClose();
                }}
                className="px-5 py-2 bg-[#ffc300] hover:bg-[#ffd033] text-[#041b47] text-xs font-mono-code uppercase font-bold rounded shadow-sm"
              >
                {lang === 'es' ? 'Listo' : 'Done'}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
            <div className="p-3.5 rounded-lg bg-[#02102e] border border-[#e0eaff]/15 text-xs font-mono-code text-[#e0eaff] flex items-center justify-between">
              <div>
                <span className="text-[#ffc300] font-bold">{lang === 'es' ? 'Inicio:' : 'Starts:'}</span> {course.startDate}
              </div>
              <div>
                <span className="text-[#ffc300] font-bold">{lang === 'es' ? 'Horario:' : 'Schedule:'}</span> {course.schedule}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono-code uppercase text-[#e0eaff] mb-1">
                {lang === 'es' ? 'Nombre y Apellidos' : 'Full Name'} *
              </label>
              <input
                required
                type="text"
                placeholder="Ej. Carlos Andrés Restrepo"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#02102e] border border-[#e0eaff]/20 text-sm text-white focus:outline-none focus:border-[#ffc300]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono-code uppercase text-[#e0eaff] mb-1">
                {lang === 'es' ? 'Correo Electrónico' : 'Email Address'} *
              </label>
              <input
                required
                type="email"
                placeholder="carlos@universidad.edu"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#02102e] border border-[#e0eaff]/20 text-sm text-white focus:outline-none focus:border-[#ffc300]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono-code uppercase text-[#e0eaff] mb-1">
                {lang === 'es' ? 'Universidad / Organización' : 'University / Organization'} *
              </label>
              <input
                required
                type="text"
                placeholder="Ej. Universidad de Chile / Banco Central"
                value={formData.university}
                onChange={(e) => setFormData({ ...formData, university: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#02102e] border border-[#e0eaff]/20 text-sm text-white focus:outline-none focus:border-[#ffc300]"
              />
            </div>

            <div>
              <label className="block text-xs font-mono-code uppercase text-[#e0eaff] mb-1">
                {lang === 'es' ? 'Experiencia Previa en Programación' : 'Coding Background'}
              </label>
              <select
                value={formData.experienceLevel}
                onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#02102e] border border-[#e0eaff]/20 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ffc300]"
              >
                <option value="Principiante absoluto">Principiante absoluto</option>
                <option value="Conozco R / Python básico">Conozco R / Python básico</option>
                <option value="Uso Stata frecuentemente">Uso Stata frecuentemente</option>
                <option value="Avanzado en econometría y código">Avanzado en econometría y código</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2.5 bg-[#ffc300] hover:bg-[#ffd033] text-[#041b47] font-mono-code text-xs uppercase font-bold tracking-wider rounded flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm"
              >
                <Send className="w-4 h-4 text-[#041b47]" />
                <span>{lang === 'es' ? 'Confirmar Inscripción Gratuita' : 'Confirm Free Enrollment'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
