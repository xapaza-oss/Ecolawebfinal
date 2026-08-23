import React, { useState } from 'react';
import { NavSection } from '../types';
import { Search, Globe, Moon, Sun, Menu, X, FlaskConical, Sparkles, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentSection: NavSection;
  onNavigate: (section: NavSection) => void;
  isDark: boolean;
  onToggleTheme: () => void;
  lang: 'es' | 'en';
  onToggleLang: () => void;
  onOpenSearch: () => void;
  onOpenJoin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentSection,
  onNavigate,
  isDark,
  onToggleTheme,
  lang,
  onToggleLang,
  onOpenSearch,
  onOpenJoin
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: NavSection; labelEs: string; labelEn: string }[] = [
    { id: 'inicio', labelEs: 'Inicio', labelEn: 'Home' },
    { id: 'formacion', labelEs: 'Formación', labelEn: 'Training' },
    { id: 'mentores', labelEs: 'Mentores', labelEn: 'Mentors' },
    { id: 'docentes', labelEs: 'Docentes', labelEn: 'Faculty' },
    { id: 'proyectos', labelEs: 'Proyectos', labelEn: 'Projects' },
    { id: 'data', labelEs: 'EcoLab Data', labelEn: 'EcoLab Data' },
    { id: 'recursos', labelEs: 'Recursos', labelEn: 'Resources' }
  ];

  const handleNavClick = (section: NavSection) => {
    onNavigate(section);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
      isDark
        ? 'bg-[#041b47]/90 backdrop-blur-xl border-b border-[#e0eaff]/15 text-[#e0eaff]'
        : 'bg-white/95 backdrop-blur-xl border-b border-[#041b47]/15 text-[#041b47] shadow-sm'
    }`}>
      <div className="flex justify-between items-center px-4 sm:px-8 max-w-7xl mx-auto h-16">
        {/* Brand */}
        <button
          id="nav-brand-logo"
          onClick={() => handleNavClick('inicio')}
          className="font-serif-display text-2xl font-bold tracking-tight flex items-center gap-2 text-left group focus:outline-none"
        >
          <div className="w-8 h-8 rounded-lg bg-[#ffc300]/15 border border-[#ffc300]/40 flex items-center justify-center text-[#ffc300] group-hover:scale-105 transition-transform">
            <FlaskConical className="w-5 h-5 text-[#ffc300]" />
          </div>
          <span className={`${isDark ? 'text-white' : 'text-[#041b47]'} transition-colors`}>
            EcoLab
          </span>
          <span className="hidden sm:inline-block text-[10px] uppercase font-mono-code px-1.5 py-0.5 rounded border border-[#ffc300]/40 text-[#ffc300] bg-[#ffc300]/10 font-bold">
            v2.6
          </span>
        </button>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.filter(item => item.id !== 'inicio').map((item) => {
            const isActive = currentSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`font-mono-code text-[13px] tracking-wide relative py-1.5 transition-colors duration-200 focus:outline-none ${
                  isActive
                    ? 'text-[#ffc300] font-bold'
                    : isDark
                      ? 'text-[#e0eaff]/80 hover:text-white'
                      : 'text-[#041b47]/80 hover:text-[#041b47]'
                }`}
              >
                {lang === 'es' ? item.labelEs : item.labelEn}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] rounded-full transition-all duration-300 bg-[#ffc300] shadow-[0_0_8px_#ffc300]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Search Trigger */}
          <button
            id="nav-search-btn"
            onClick={onOpenSearch}
            aria-label="Buscar en EcoLab"
            className={`p-2 rounded-full transition-colors flex items-center justify-center ${
              isDark
                ? 'text-[#e0eaff] hover:text-[#ffc300] hover:bg-white/10'
                : 'text-[#041b47] hover:text-[#041b47] hover:bg-[#e0eaff]'
            }`}
            title="Buscar (Ctrl+K)"
          >
            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          {/* Language Switch */}
          <button
            id="nav-lang-btn"
            onClick={onToggleLang}
            aria-label="Cambiar idioma"
            className={`px-2.5 py-1 rounded-full text-xs font-mono-code uppercase font-semibold flex items-center gap-1 transition-colors ${
              isDark
                ? 'text-[#e0eaff] hover:text-[#ffc300] hover:bg-white/10 border border-[#e0eaff]/20'
                : 'text-[#041b47] hover:bg-[#e0eaff] border border-[#041b47]/20'
            }`}
            title={lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{lang.toUpperCase()}</span>
          </button>

          {/* Dark/Light Mode Switch */}
          <button
            id="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label="Cambiar tema claro/oscuro"
            className={`p-2 rounded-full transition-colors flex items-center justify-center ${
              isDark
                ? 'text-[#e0eaff] hover:text-[#ffc300] hover:bg-white/10'
                : 'text-[#041b47] hover:bg-[#e0eaff]'
            }`}
            title={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
          >
            {isDark ? (
              <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-[#ffc300] hover:rotate-45 transition-transform" />
            ) : (
              <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-[#041b47] hover:-rotate-12 transition-transform" />
            )}
          </button>

          {/* Join CTA Button */}
          <button
            id="nav-join-btn"
            onClick={onOpenJoin}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 bg-[#ffc300] text-[#041b47] font-mono-code text-xs uppercase font-bold tracking-wider rounded hover:bg-[#ffd033] hover:shadow-[0_0_18px_rgba(255,195,0,0.45)] active:scale-95 transition-all ml-1"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#041b47]" />
            {lang === 'es' ? 'Únete' : 'Join Us'}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            id="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${isDark ? 'text-[#e0eaff] hover:bg-white/10' : 'text-[#041b47] hover:bg-[#e0eaff]'}`}
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className={`lg:hidden px-4 pt-2 pb-6 border-t ${
          isDark ? 'bg-[#041b47] border-[#e0eaff]/20' : 'bg-white border-[#041b47]/15'
        }`}>
          <div className="flex flex-col space-y-2 py-2">
            {navItems.map((item) => {
              const isActive = currentSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded font-mono-code text-sm text-left transition-colors ${
                    isActive
                      ? isDark
                        ? 'bg-[#ffc300]/15 text-[#ffc300] border-l-2 border-[#ffc300] font-bold'
                        : 'bg-[#e0eaff] text-[#041b47] border-l-2 border-[#041b47] font-bold'
                      : isDark
                        ? 'text-[#e0eaff] hover:bg-white/5'
                        : 'text-[#041b47] hover:bg-[#e0eaff]/40'
                  }`}
                >
                  <span>{lang === 'es' ? item.labelEs : item.labelEn}</span>
                  <ChevronRight className="w-4 h-4 opacity-50" />
                </button>
              );
            })}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenJoin();
              }}
              className="w-full mt-3 py-3 bg-[#ffc300] text-[#041b47] font-mono-code text-xs uppercase font-bold tracking-wider rounded text-center flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20"
            >
              <Sparkles className="w-4 h-4 text-[#041b47]" />
              {lang === 'es' ? 'Únete a EcoLab' : 'Join EcoLab'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
