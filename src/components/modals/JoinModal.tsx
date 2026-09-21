import React from 'react';
import { X, Send } from 'lucide-react';

interface JoinModalProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  lang: 'es' | 'en';
}

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSewRv-Z32BtPBV9kRWF3J0Ra_6iZ0244OcVCmje_MQOpQybTg/viewform?usp=sharing';

export const JoinModal: React.FC<JoinModalProps> = ({
  isOpen,
  onClose,
  isDark,
  lang
}) => {
  if (!isOpen) return null;

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

        {/* Body */}
        <div className="p-6 sm:p-8 space-y-5">
          <p className={`text-sm leading-relaxed ${isDark ? 'text-[#e0eaff]/85' : 'text-[#041b47]/80'}`}>
            {lang === 'es'
              ? 'Completa el formulario oficial de inscripción de EcoLab. El comité académico revisará tu perfil en menos de 48 horas.'
              : 'Fill out the official EcoLab registration form. The academic committee will review your application within 48 hours.'}
          </p>

          
            href={GOOGLE_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-mono-code text-sm uppercase font-bold tracking-wider bg-[#ffc300] hover:bg-[#ffd033] text-[#041b47] shadow-sm active:scale-95 transition-all"
          >
            <Send className="w-4 h-4" />
            {lang === 'es' ? 'Inscribirme con el Formulario de Google' : 'Register with Google Form'}
          </a>

          <p className={`text-xs text-center ${isDark ? 'text-[#e0eaff]/60' : 'text-[#041b47]/60'}`}>
            {lang === 'es'
              ? 'Se abrirá en una nueva pestaña.'
              : 'This will open in a new tab.'}
          </p>
        </div>
      </div>
    </div>
  );
};
