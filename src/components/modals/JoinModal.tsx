import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, User, Mail, Building2, BookOpen, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  lang: 'es' | 'en';
}

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  isDark,
  lang
}) => {
  const [role, setRole] = useState<'estudiante' | 'docente' | 'mentor' | 'institucion'>('estudiante');
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    institution: '',
    academicLevel: 'Pregrado (Últimos semestres)',
    researchInterest: 'Econometría & Inferencia Causal',
    motivation: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = `ECOLAB-${Math.floor(100000 + Math.random() * 900000)}`;
    setApplicationId(newId);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div
        className={`relative w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border ${
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
                {lang === 'es' ? 'Convocatoria Abierta 2026' : 'Open Call 2026'}
              </span>
            </div>
            <h3 className={`font-serif-display text-2xl sm:text-3xl font-bold mt-1 ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
              {lang === 'es' ? 'Únete a la Comunidad EcoLab' : 'Join the EcoLab Community'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-[#e0eaff]/70 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#ffc300]/20 border border-[#ffc300]/40 text-[#ffc300] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <h4 className={`font-serif-display text-2xl font-bold mb-2 ${isDark ? 'text-white' : 'text-[#041b47]'}`}>
                {lang === 'es' ? '¡Postulación Recibida!' : 'Application Received!'}
              </h4>
              <p className={`text-sm max-w-md mx-auto ${isDark ? 'text-[#e0eaff]/85' : 'text-[#041b47]/80'}`}>
                {lang === 'es'
                  ? `Hemos registrado tu interés en EcoLab con el código de seguimiento:`
                  : `We have registered your interest in EcoLab with tracking code:`}
              </p>
              <div className="my-3 inline-block font-mono-code font-bold text-base px-4 py-1.5 rounded bg-[#02102e] text-[#ffc300] border border-[#ffc300]/40">
                {applicationId}
              </div>
              <p className={`text-xs max-w-md mx-auto ${isDark ? 'text-[#e0eaff]/70' : 'text-[#041b47]/70'}`}>
                {lang === 'es'
                  ? `Te hemos enviado un correo de confirmación a ${formData.email || 'tu correo'}. El comité académico revisará tu perfil en menos de 48 horas.`
                  : `A confirmation email has been sent to ${formData.email || 'your email'}. The academic committee will review your application within 48 hours.`}
              </p>
            </div>

            <button
              onClick={handleReset}
              className="px-6 py-2.5 bg-[#ffc300] hover:bg-[#ffd033] text-[#041b47] font-mono-code text-xs uppercase font-bold tracking-wider rounded shadow-sm"
            >
              {lang === 'es' ? 'Entendido y Cerrar' : 'Done & Close'}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5 max-h-[75vh] overflow-y-auto">
            {/* Role Selection Tabs */}
            <div>
              <label className="block text-xs font-mono-code uppercase text-[#e0eaff] mb-2 font-medium">
                {lang === 'es' ? 'Selecciona tu Perfil' : 'Select your Profile'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'estudiante', label: lang === 'es' ? 'Estudiante' : 'Student' },
                  { id: 'docente', label: lang === 'es' ? 'Docente' : 'Professor' },
                  { id: 'mentor', label: lang === 'es' ? 'Mentor' : 'Mentor' },
                  { id: 'institucion', label: lang === 'es' ? 'Institución' : 'Partner' },
                ].map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setRole(item.id as any)}
                    className={`py-2 px-3 rounded-lg text-xs font-mono-code font-medium transition-all text-center border ${
                      role === item.id
                        ? 'bg-[#ffc300] text-[#041b47] border-[#ffc300] font-bold shadow-sm'
                        : isDark
                          ? 'bg-white/5 border-white/10 text-[#e0eaff]/70 hover:bg-white/10'
                          : 'bg-[#e0eaff]/30 border-[#041b47]/15 text-[#041b47]/70 hover:bg-[#e0eaff]/60'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Inputs */}
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono-code uppercase text-[#e0eaff] mb-1.5">
                  {lang === 'es' ? 'Nombre Completo' : 'Full Name'} *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3 top-3 text-[#e0eaff]/60" />
                  <input
                    required
                    type="text"
                    placeholder="Ej. Mateo Gómez Albarracín"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-[#02102e] border border-[#e0eaff]/20 text-sm text-white placeholder:text-[#e0eaff]/40 focus:outline-none focus:border-[#ffc300]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-code uppercase text-[#e0eaff] mb-1.5">
                    {lang === 'es' ? 'Correo Institucional / Personal' : 'Email Address'} *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3 top-3 text-[#e0eaff]/60" />
                    <input
                      required
                      type="email"
                      placeholder="usuario@universidad.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-[#02102e] border border-[#e0eaff]/20 text-sm text-white placeholder:text-[#e0eaff]/40 focus:outline-none focus:border-[#ffc300]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono-code uppercase text-[#e0eaff] mb-1.5">
                    {lang === 'es' ? 'Universidad / Organización' : 'Affiliation'} *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 absolute left-3 top-3 text-[#e0eaff]/60" />
                    <input
                      required
                      type="text"
                      placeholder="Ej. Universidad Nacional"
                      value={formData.institution}
                      onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-lg bg-[#02102e] border border-[#e0eaff]/20 text-sm text-white placeholder:text-[#e0eaff]/40 focus:outline-none focus:border-[#ffc300]"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-code uppercase text-[#e0eaff] mb-1.5">
                    {lang === 'es' ? 'Nivel Académico' : 'Academic Level'}
                  </label>
                  <select
                    value={formData.academicLevel}
                    onChange={(e) => setFormData({ ...formData, academicLevel: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#02102e] border border-[#e0eaff]/20 text-sm text-white focus:outline-none focus:border-[#ffc300]"
                  >
                    <option value="Pregrado (Semestres 1-6)">Pregrado (Semestres 1-6)</option>
                    <option value="Pregrado (Últimos semestres / Tesis)">Pregrado (Últimos semestres / Tesis)</option>
                    <option value="Maestría / Posgrado">Maestría / Posgrado</option>
                    <option value="Doctorado (PhD)">Doctorado (PhD)</option>
                    <option value="Docente Titular / Investigador">Docente Titular / Investigador</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono-code uppercase text-[#e0eaff] mb-1.5">
                    {lang === 'es' ? 'Línea de Interés Principal' : 'Primary Research Track'}
                  </label>
                  <select
                    value={formData.researchInterest}
                    onChange={(e) => setFormData({ ...formData, researchInterest: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#02102e] border border-[#e0eaff]/20 text-sm text-white focus:outline-none focus:border-[#ffc300]"
                  >
                    <option value="Econometría & Inferencia Causal">Econometría & Inferencia Causal</option>
                    <option value="Macroeconomía Cuantitativa & DSGE">Macroeconomía Cuantitativa & DSGE</option>
                    <option value="Machine Learning Económico & Big Data">Machine Learning Económico & Big Data</option>
                    <option value="Economía Conductual & Experimentos">Economía Conductual & Experimentos</option>
                    <option value="Economía Laboral & Género">Economía Laboral & Género</option>
                    <option value="Economía Ambiental & Energía">Economía Ambiental & Energía</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-code uppercase text-[#e0eaff] mb-1.5">
                  {lang === 'es' ? '¿Tienes una pregunta o proyecto en mente?' : 'Research Question or Motivation'}
                </label>
                <textarea
                  rows={3}
                  placeholder={lang === 'es' ? 'Describe brevemente qué tema te gustaría investigar o cómo te gustaría colaborar...' : 'Briefly describe the research question or how you want to collaborate...'}
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  className="w-full p-3 rounded-lg bg-[#02102e] border border-[#e0eaff]/20 text-sm text-white placeholder:text-[#e0eaff]/40 focus:outline-none focus:border-[#ffc300]"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3 bg-[#ffc300] hover:bg-[#ffd033] text-[#041b47] font-mono-code text-xs uppercase font-bold tracking-wider rounded shadow-sm active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-[#041b47]" />
                <span>{lang === 'es' ? 'Enviar Postulación a EcoLab' : 'Submit Application'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
