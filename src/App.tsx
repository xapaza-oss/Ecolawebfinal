import React, { useState, useEffect } from 'react';
import { NavSection, PillarDetail, Project, Course, MentorDocente } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './components/views/HomeView';
import { FormacionView } from './components/views/FormacionView';
import { MentoresDocentesView } from './components/views/MentoresDocentesView';
import { ProyectosView } from './components/views/ProyectosView';
import { EcoLabDataView } from './components/views/EcoLabDataView';
import { RecursosView } from './components/views/RecursosView';

// Modals
import { PillarModal } from './components/modals/PillarModal';
import { JoinModal } from './components/modals/JoinModal';
import { SearchModal } from './components/modals/SearchModal';
import { MentorshipModal } from './components/modals/MentorshipModal';
import { EnrollModal } from './components/modals/EnrollModal';
import { PaperDetailModal } from './components/modals/PaperDetailModal';

export function App() {
  const [currentSection, setCurrentSection] = useState<NavSection>('inicio');
  const [isDark, setIsDark] = useState<boolean>(true);
  const [lang, setLang] = useState<'es' | 'en'>('es');

  // Modals state
  const [activePillar, setActivePillar] = useState<PillarDetail | null>(null);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState<boolean>(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState<boolean>(false);
  const [selectedMentor, setSelectedMentor] = useState<MentorDocente | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Global hotkeys (e.g. Cmd+K / Ctrl+K for search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (section: NavSection) => {
    setCurrentSection(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen font-sans ${isDark ? 'bg-[#041b47] text-[#e0eaff]' : 'bg-[#e0eaff]/30 text-[#041b47]'} transition-colors duration-300 selection:bg-[#ffc300] selection:text-[#041b47]`}>
      {/* Top Fixed Navbar */}
      <Navbar
        currentSection={currentSection}
        onNavigate={handleNavigate}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        lang={lang}
        onToggleLang={() => setLang(lang === 'es' ? 'en' : 'es')}
        onOpenSearch={() => setIsSearchModalOpen(true)}
        onOpenJoin={() => setIsJoinModalOpen(true)}
      />

      {/* Main View Router */}
      <main className="w-full pt-16">
        {currentSection === 'inicio' && (
          <HomeView
            isDark={isDark}
            onNavigate={handleNavigate}
            onSelectPillar={(pillar) => setActivePillar(pillar)}
            onSelectProject={(proj) => setSelectedProject(proj)}
            onSelectCourse={(course) => setSelectedCourse(course)}
            onOpenJoin={() => setIsJoinModalOpen(true)}
            lang={lang}
          />
        )}

        {currentSection === 'formacion' && (
          <FormacionView
            isDark={isDark}
            onSelectCourse={(course) => setSelectedCourse(course)}
            lang={lang}
          />
        )}

        {(currentSection === 'mentores' || currentSection === 'docentes') && (
          <MentoresDocentesView
            isDark={isDark}
            initialRoleFilter={currentSection === 'docentes' ? 'docente' : currentSection === 'mentores' ? 'mentor' : 'all'}
            onSelectMentor={(mentor) => setSelectedMentor(mentor)}
            lang={lang}
          />
        )}

        {currentSection === 'proyectos' && (
          <ProyectosView
            isDark={isDark}
            onSelectProject={(proj) => setSelectedProject(proj)}
            lang={lang}
          />
        )}

        {currentSection === 'data' && (
          <EcoLabDataView isDark={isDark} lang={lang} />
        )}

        {currentSection === 'recursos' && (
          <RecursosView isDark={isDark} lang={lang} />
        )}
      </main>

      {/* Institutional Academic Footer */}
      <Footer onNavigate={handleNavigate} lang={lang} />

      {/* Modals */}
      <PillarModal
        pillar={activePillar}
        onClose={() => setActivePillar(null)}
        onNavigate={handleNavigate}
        isDark={isDark}
        lang={lang}
      />

      <JoinModal
        isOpen={isJoinModalOpen}
        onClose={() => setIsJoinModalOpen(false)}
        isDark={isDark}
        lang={lang}
      />

      <SearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        onNavigate={handleNavigate}
        isDark={isDark}
        lang={lang}
      />

      <MentorshipModal
        mentor={selectedMentor}
        onClose={() => setSelectedMentor(null)}
        isDark={isDark}
        lang={lang}
      />

      <EnrollModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        isDark={isDark}
        lang={lang}
      />

      <PaperDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        isDark={isDark}
        lang={lang}
      />
    </div>
  );
}

export default App;
