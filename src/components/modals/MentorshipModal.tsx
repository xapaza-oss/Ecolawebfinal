import React, { useState } from 'react';
import { MentorDocente } from '../../types';
import { X, Calendar, Clock, CheckCircle2, Send, HelpCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface MentorshipModalProps {
  mentor: MentorDocente | null;
  onClose: () => void;
  isDark: boolean;
  lang: 'es' | 'en';
}

export const MentorshipModal: React.FC<MentorshipModalProps> = ({
  mentor,
  onClose,
  isDark,
  lang
}) => {
  const [formData, setFormData] = useState({
    studentName: '',
    studentEmail: '',
    topic: 'Tesis de Pregrado / Posgrado',
    dateSlot: 'Próximo Jueves, 15:00',
    details: ''
  });
  const [confirmed, setConfirmed] = useState(false);

  if (!mentor) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setConfirmed(true);
    try {
      confetti({ particleCount: 50, spread: 60 });
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
          <div className="flex items-center gap-3">
            <img
              src={mentor.avatar}
              alt={mentor.name}
              referrerPolicy="no-referrer"
              className="w-12 h-12 rounded-full object-cover border-2 border-[#ffc300]"
            />
            <div>
              <span className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded bg-[#ffc300]/15 text-[#ffc300] border border-[#ffc300]/30 font-semibold">
                {lang === 'es' ? 'Agendar Asesoría' : 'Book Office Hour'}
              </span>
              <h3 className={`font-serif-display text-xl font-bold mt-0.5 ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
                {mentor.name}
              </h3>
              <p className="text-xs text-[#e0eaff]/70 font-mono-code">{mentor.department}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-[#e0eaff]/70 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {confirmed ? (
          <div className="p-8 text-center space-y-5">
            <div className="w-14 h-14 rounded-full bg-[#ffc300]/20 border border-[#ffc300]/40 text-[#ffc300] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h4 className={`font-serif-display text-2xl font-bold ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
              {lang === 'es' ? '¡Sesión de Mentoría Solicitada!' : 'Mentorship Session Requested!'}
            </h4>
            <p className={`text-sm ${isDark ? 'text-[#e0eaff]/85' : 'text-[#041b47]/80'}`}>
              {lang === 'es'
                ? `Hemos enviado la invitación para el horario ${formData.dateSlot} con ${mentor.name}. Recibirás el enlace de Google Meet en ${formData.studentEmail}.`
                : `We have sent your request for ${formData.dateSlot} with ${mentor.name}. You'll receive the Google Meet link at ${formData.studentEmail}.`}
            </p>

            <button
              onClick={() => {
                setConfirmed(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-[#ffc300] hover:bg-[#ffd033] text-[#041b47] font-mono-code text-xs uppercase font-bold tracking-wider rounded shadow-sm"
            >
              {lang === 'es' ? 'Cerrar' : 'Close'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
            <div>
              <label className="block text-xs font-mono-code uppercase text-[#e0eaff] mb-1">
                {lang === 'es' ? 'Tu Nombre' : 'Your Name'} *
              </label>
              <input
                required
                type="text"
                placeholder="Ej. Ana Lucía Morales"
                value={formData.studentName}
                onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
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
                placeholder="ana.morales@estudiante.edu"
                value={formData.studentEmail}
                onChange={(e) => setFormData({ ...formData, studentEmail: e.target.value })}
                className="w-full px-3 py-2 rounded-lg bg-[#02102e] border border-[#e0eaff]/20 text-sm text-white focus:outline-none focus:border-[#ffc300]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-mono-code uppercase text-[#e0eaff] mb-1">
                  {lang === 'es' ? 'Motivo de la Consulta' : 'Purpose'}
                </label>
                <select
                  value={formData.topic}
                  onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#02102e] border border-[#e0eaff]/20 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ffc300]"
                >
                  <option value="Tesis de Pregrado / Posgrado">Tesis de Pregrado / Posgrado</option>
                  <option value="Diseño Econométrico / Causal">Diseño Econométrico / Causal</option>
                  <option value="Revisión de Working Paper">Revisión de Working Paper</option>
                  <option value="Orientación Postulación PhD">Orientación Postulación PhD</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono-code uppercase text-[#e0eaff] mb-1">
                  {lang === 'es' ? 'Horario Disponible' : 'Slot Available'}
                </label>
                <select
                  value={formData.dateSlot}
                  onChange={(e) => setFormData({ ...formData, dateSlot: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-[#02102e] border border-[#e0eaff]/20 text-xs sm:text-sm text-white focus:outline-none focus:border-[#ffc300]"
                >
                  <option value="Próximo Jueves, 15:00">Próximo Jueves, 15:00</option>
                  <option value="Próximo Jueves, 16:30">Próximo Jueves, 16:30</option>
                  <option value="Próximo Viernes, 10:00">Próximo Viernes, 10:00</option>
                  <option value="Próximo Viernes, 11:30">Próximo Viernes, 11:30</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono-code uppercase text-[#e0eaff] mb-1">
                {lang === 'es' ? 'Pregunta o Planteamiento del Problema' : 'Research Question'}
              </label>
              <textarea
                rows={3}
                placeholder={
                  lang === 'es'
                    ? 'Explica brevemente tu hipótesis, los datos que tienes y la duda metodológica principal...'
                    : 'Briefly describe your hypothesis, data source, and econometric question...'
                }
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full p-3 rounded-lg bg-[#02102e] border border-[#e0eaff]/20 text-sm text-white placeholder:text-[#e0eaff]/40 focus:outline-none focus:border-[#ffc300]"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-2.5 bg-[#ffc300] hover:bg-[#ffd033] text-[#041b47] font-mono-code text-xs uppercase font-bold tracking-wider rounded flex items-center justify-center gap-2 active:scale-95 transition-all shadow-sm"
              >
                <Send className="w-4 h-4 text-[#041b47]" />
                <span>{lang === 'es' ? 'Confirmar y Solicitar Asesoría' : 'Confirm & Request Session'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
