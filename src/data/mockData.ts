import { Course, MentorDocente, Project, EconomicDataset, ResourceItem, PillarDetail, TeamMember, NewsPost } from '../types';
import fotoLogo from '../../assets/Logo.png';
import fotoDanielAlanoca from '../../assets/Daniel Alanoca .jpeg';
import fotoPaolaPorco from '../../assets/Paola Porco .jpg';
import fotoIvanVelazquez from '../../assets/Ivan Velazquez.jpg';
import fotoOsmarBolivar from '../../assets/Osmar Bolivar.png';
import fotoPabloCachaga from '../../assets/pablo Cachaga.jpg';
import fotoVidalCoque from '../../assets/Vidal Coque.jpg';
import fotoMiguelMolina from '../../assets/Miguel Molina.jpg';
import fotoJamilPatzi from '../../assets/Jamil Patzi.jpg';
import fotoMarielaRamos from '../../assets/Mariela Ramos.jpg';
import fotoPabloAlandia from '../../assets/Pablo Alandia.jpg';
import fotoXimenaApaza from '../../assets/Ximena Apaza.png';



export const NEWS_DATA: NewsPost[] = [
  {
    id: 'news-1',
    title: 'Título de tu publicación',
    type: 'foto',
    mediaUrl: 'https://drive.google.com/uc?export=view&id=1vVmY3o8YHZ-7pfNPqGASVkil-kfKPAIO',
    date: '2026-03-15',
    description: 'Descripción corta de la publicación.'
  }
];

export const EQUIPO_DATA: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Mariela Ramos Guarachi',
    photoUrl: fotoMarielaRamos,
    cvSummary: 'Cargo: Co-fundadora',
    description: 'Mariela es estudiante de octavo semestre de la carrera de Economía en la Universidad Mayor de San Andrés (UMSA), con mención en Análisis Económico. Actualmente se desempeña como asistente de cátedra de Ecuaciones Diferenciales y en Diferencias y Asistente de Investigacion en el  Instituto de Investigaciones Socio-Económicas de la Universidad Católica Boliviana “San Pablo”. Además, forma parte de la Sociedad Científica de Estudiantes de la Carrera de Economía (SOCIENCE), es coordinadora del Programa de Formación y Mentorías en Investigación Aplicada "EcoLab".'
  },
  {
    id: 'team-1',
    name: 'Jamil',
    photoUrl: fotoJamilPatzi,
    cvSummary: 'Cargo: Co-fundadora',
    description: 'Estudiante de Economía en Bolivia, con un marcado interés por el análisis económico, la investigación y la enseñanza. A lo largo de su formación académica ha desarrollado conocimientos en áreas como Microeconomía, Macroeconomía y Econometría, buscando comprender y analizar los principales desafíos económicos del país. Se caracteriza por ser una persona responsable, perseverante y comprometida con su formación profesional, con la motivación de continuar adquiriendo conocimientos, desarrollar nuevas habilidades y contribuir, desde la economía, al desarrollo de Bolivia.'
  },
  {
    id: 'team-1',
    name: 'Ximena Apaza Mamani',
    photoUrl: fotoXimenaApaza,
    cvSummary: 'Cargo: Co-fundadora',
    description: 'Estudiante de Economía en la Universidad Mayor de San Andrés (UMSA), cursando la mención de Análisis Económico. Es integrante de la Sociedad Científica de Estudiantes de Economía (SOCIENCE-UMSA), de la Red Juvenil de Economía Circular (RED JEC) y del área de Investigación y Desarrollo de Mujeres Cambiando el Futuro. Ha participado como delegada en la Conferencia Local de la Juventud sobre Cambio Climático (LCOY Bolivia), en el acompañamiento a emprendimientos sostenibles con la Fundación CAINCO y en programas de formación digital impulsados por la Embajada de EE. UU. (NextGen: Pioneras Digitales). Sus intereses de investigación se centran en la sociología económica, la economía del comportamiento, la transición ecológica, la equidad de género y los mercados digitales.'
  },
{
    id: 'team-1',
    name: 'Pablo Rene Alandia S',
    photoUrl: fotoPabloAlandia,
    cvSummary: 'Cargo: Co-fundador',
    description: 'Estudiante de Economía en Bolivia, con un marcado interés por el análisis económico, la investigación y la enseñanza. A lo largo de su formación académica ha desarrollado conocimientos en áreas como Microeconomía, Macroeconomía y Econometría, buscando comprender y analizar los principales desafíos económicos del país. Se caracteriza por ser una persona responsable, perseverante y comprometida con su formación profesional, con la motivación de continuar adquiriendo conocimientos, desarrollar nuevas habilidades y contribuir, desde la economía, al desarrollo de Bolivia.'
  },
  {
    id: 'team-1',
    name: 'Paola Porco',
    photoUrl: fotoPaolaPorco,
    description: 'Estudiante de séptimo semestre de la carrera de Economía en la Universidad Mayor de San Andrés (UMSA), cursando la mención en Economía Financiera.. Actualmente, es miembro activo de la Sociedad Científica de Estudiantes de Economía (SOCIENCE – UMSA), donde desarrolla capacidades en metodología de investigación y análisis de datos. Posee un fuerte interés por el área financiera y los mercados. Asimismo, sus intereses de investigación se enfocan en el crecimiento económico y el bienestar social, con especial énfasis en el estudio de la desigualdad, la pobreza, la economía de la educación, el medio ambiente, la equidad de género.'
  },
  {
    id: 'team-1',
    name: 'Daniel Alanoca',
    photoUrl: fotoDanielAlanoca,
    description: 'Estudiante de Economía en Bolivia, con un marcado interés por el análisis económico, la investigación y la enseñanza. A lo largo de su formación académica ha desarrollado conocimientos en áreas como Microeconomía, Macroeconomía y Econometría, buscando comprender y analizar los principales desafíos económicos del país. Se caracteriza por ser una persona responsable, perseverante y comprometida con su formación profesional, con la motivación de continuar adquiriendo conocimientos, desarrollar nuevas habilidades y contribuir, desde la economía, al desarrollo de Bolivia.'
  }
];

export const PILLARS_DATA: PillarDetail[] = [
  {
    id: 'formacion',
    title: 'Formación',
    iconName: 'school',
    subtitle: 'Formación práctica y rigor metodológico',
    description: 'Ciclo de sesiones teórico-prácticas en programación (Stata, Python, Matlab), macroeconometría, microeconometría, inteligencia artificial y finanzas cuantitativas aplicadas al análisis económico.',
    steps: [
      'Talleres de macroeconometría (modelos lineales y no lineales) y microeconometría (evaluación de impacto y modelos de elección discreta).',
      'Sesiones de inteligencia artificial aplicada a la economía y machine learning.',
      'Talleres prácticos de Stata y Python para el manejo de encuestas de hogares y análisis de datos.'
    ],
    tools: ['Stata', 'Python', 'Matlab'],
    metrics: '8 módulos y 15 sesiones teórico-prácticas',
    color: '#ffc300'
  },
  {
    id: 'mentoria',
    title: 'Mentoría',
    iconName: 'psychology',
    subtitle: 'Acompañamiento de docentes e investigadores',
    description: 'Cada sesión es dirigida por docentes de la carrera de Economía y docentes invitados, quienes acompañan a los estudiantes en el desarrollo de sus propuestas de investigación aplicada.',
    steps: [
      'Orientación en la identificación de problemas y preguntas de investigación.',
      'Acompañamiento en el diseño de propuestas de investigación aplicada.',
      'Retroalimentación (feedback) sobre las propuestas presentadas al cierre del programa.'
    ],
    tools: ['Google Meet', 'Zoom'],
    metrics: 'Modalidad híbrida: sesiones presenciales y virtuales',
    color: '#e0eaff'
  },
  {
    id: 'investigacion',
    title: 'Investigación',
    iconName: 'search',
    subtitle: 'De la formación a la propuesta de investigación',
    description: 'El programa culmina con la presentación de propuestas de investigación aplicada elaboradas por los estudiantes participantes, como cierre del proceso formativo.',
    steps: [
      'Desarrollo de una propuesta de investigación aplicada individual o grupal.',
      'Presentación de propuestas de investigación al finalizar el programa.',
      'Certificación para quienes asistan al 80% de las sesiones o presenten su propuesta.'
    ],
    tools: ['Investigación Aplicada'],
    metrics: '16 propuestas de investigación en la primera versión',
    color: '#ffc300'
  }
];
export const COURSES_DATA: Course[] = [
  {
    id: 'curso-1',
    title: 'Investigación Aplicada',
    level: 'Intermedio',
  track: 'Investigación & Metodología',
  duration: '1 Sesión (4 horas)',
  hours: 4,
  instructor: 'Ph.D. Iván Omar Velásquez Castellanos',
  instructorRole: 'PhD en Economía - Docente e Investigador',
  instructorAffiliation: 'UMSA / UNIVALLE / SOCIENCE',
  description: 'Fundamentos metodológicos para la investigación aplicada en economía, identificación de problemas, formulación de preguntas de investigación y diseño riguroso de propuestas empíricas.',
  tools: ['Stata', 'R', 'Metodología de Investigación'],
  syllabus: [
    { week: 1, topic: 'Fundamentos de la investigación aplicada en economía', practicalWork: 'Identificación de problemas y formulación de preguntas de investigación' },
    { week: 1, topic: 'Diseño de propuestas de investigación aplicada', practicalWork: 'Estructuración y presentación de propuesta de investigación preliminar' }
  ],
  enrolledCount: 142,
  startDate: '02 de Octubre, 2026',
  schedule: 'Viernes, 17:30 - 21:30',
  modality: 'Presencial (Aula Magistral)',
  featured: true
  },
  {
    id: 'curso-2',
    title: 'Inteligencia Artificial para Economía',
    level: 'Avanzado',
  track: 'Inteligencia Artificial & Machine Learning',
  duration: '1 Sesión (1 hora)',
  hours: 1,
  instructor: 'M.Sc. Osmar Bolívar Rosales',
  instructorRole: 'MSc en Política Económica y Economía Aplicada - Jefe de Asuntos Económicos',
  instructorAffiliation: 'CAINCO / UASB / SOCIENCE',
  description: 'Introducción a las aplicaciones de la inteligencia artificial y aprendizaje automático en el análisis económico y la toma de decisiones financieras.',
  tools: ['Python', 'Machine Learning', 'IA Generativa'],
  syllabus: [
    { week: 1, topic: 'Introducción a la IA y sus aplicaciones económicas', practicalWork: 'Casos de uso de IA en decisiones económicas y financieras' },
    { week: 1, topic: 'Modelos de aprendizaje automático aplicados al análisis económico', practicalWork: 'Demostración práctica de modelos de Machine Learning en economía' }
  ],
  enrolledCount: 120,
  startDate: '03 de Octubre, 2026',
  schedule: 'Sábado, 10:00 - 11:00',
  modality: 'Online en vivo (Google Meet / Zoom)',
  featured: true
  },
  {
    id: 'curso-3',
    title: 'Macroeconometría I: Modelos Lineales',
  level: 'Intermedio',
  track: 'Macroeconometría & Series de Tiempo',
  duration: '3 Sesiones (4.5 horas)',
  hours: 5,
  instructor: 'Lic. Pablo Cachaga Herrera',
  instructorRole: 'Lic. en Economía y Magíster en Finanzas - Docente Universitario',
  instructorAffiliation: 'UMSA / UTB / SOCIENCE',
  description: 'Fundamentos e implementación de modelos macroeconométricos lineales de series de tiempo, diagnóstico, validación y estimación con datos macroeconómicos.',
  tools: ['EViews', 'Stata', 'R'],
  syllabus: [
    { week: 1, topic: 'Fundamentos de los modelos macroeconométricos lineales', practicalWork: 'Estimación de modelos de series de tiempo lineales' },
    { week: 1, topic: 'Diagnóstico y validación de modelos lineales', practicalWork: 'Pruebas de estacionariedad, autocorrelación y heterocedasticidad' },
    { week: 1, topic: 'Aplicaciones prácticas con series macroeconómicas', practicalWork: 'Modelado y simulación con datos del Banco Central' }
  ],
  enrolledCount: 95,
  startDate: '07 de Octubre, 2026',
  schedule: 'Miércoles, Jueves y Sábado, 18:30 - 20:00',
  modality: 'Online en vivo',
  featured: false
  },
  {
    id: 'curso-4',
    title: 'Macroeconometría II: Modelos No Lineales',
  level: 'Avanzado',
  track: 'Macroeconometría & Series de Tiempo',
  duration: '3 Sesiones (4.5 horas)',
  hours: 5,
  instructor: 'M.Sc. Vidal Choque Atto',
  instructorRole: 'Analista del Sector Real Senior',
  instructorAffiliation: 'Banco Central de Bolivia (BCB) / SOCIENCE',
  description: 'Estudio de modelos macroeconométricos no lineales, modelos de cambio de régimen y umbral aplicados al análisis de fluctuaciones y ciclos económicos.',
  tools: ['Stata', 'Matlab', 'R'],
  syllabus: [
    { week: 1, topic: 'Introducción a los modelos macroeconométricos no lineales', practicalWork: 'Identificación de no linealidades en series macroeconómicas' },
    { week: 1, topic: 'Modelos de cambio de régimen (Markov-Switching) y umbral (TAR/SETAR)', practicalWork: 'Estimación de modelos de cambio de régimen en Stata/R' },
    { week: 1, topic: 'Aplicaciones de modelos no lineales al análisis macroeconómico', practicalWork: 'Evaluación de impactos asimétricos en shocks económicos' }
  ],
  enrolledCount: 88,
  startDate: '11 de Octubre, 2026',
  schedule: 'Domingo, Martes y Jueves, 19:00 - 20:30',
  modality: 'Online en vivo',
  featured: false
  },
  {
    id: 'curso-5',
    title: 'Taller de Stata para Encuestas de Hogares',
  level: 'Intermedio',
  track: 'Microeconometría & Procesamiento de Datos',
  duration: '1 Sesión (2 horas)',
  hours: 2,
  instructor: 'Lic. Elvis Cristian Vargas Usnayo',
  instructorRole: 'Investigador Asistente',
  instructorAffiliation: 'Fundación Aru / UMSA / SOCIENCE',
  description: 'Manejo especializado de microdatos de encuestas de hogares en Stata, abarcando técnicas de limpieza, depuración y uso de factores de expansión/ponderadores.',
  tools: ['Stata'],
  syllabus: [
    { week: 1, topic: 'Manejo de bases de datos de encuestas de hogares en Stata', practicalWork: 'Estructuración y fusión de módulos de encuestas de hogares (INE)' },
    { week: 1, topic: 'Limpieza, depuración y ponderación de datos de encuestas', practicalWork: 'Cálculo de indicadores socioeconómicos aplicando factores de expansión' }
  ],
  enrolledCount: 130,
  startDate: '20 de Octubre, 2026',
  schedule: 'Martes, 19:00 - 21:00',
  modality: 'Online en vivo',
  featured: false
  },
  {
    id: 'curso-6',
    title: 'Microeconometría I: Evaluación de Impacto',
  level: 'Avanzado',
  track: 'Políticas Públicas & Causalidad',
  duration: '2 Sesiones (3 horas)',
  hours: 3,
  instructor: 'MPA José Miguel Molina Fernández',
  instructorRole: 'Research Fellow (BID) - Master in Public Administration (Harvard)',
  instructorAffiliation: 'BID (OVE) / Harvard University / SOCIENCE',
  description: 'Principios y métodos de evaluación de impacto experimental y cuasi-experimental para la medición del efecto causal de programas y políticas públicas.',
  tools: ['Stata', 'R', 'Inferencia Causal'],
  syllabus: [
    { week: 1, topic: 'Fundamentos de la evaluación de impacto en microeconometría', practicalWork: 'Construcción del contrafactual e identificación de sesgo de selección' },
    { week: 1, topic: 'Métodos de evaluación: experimentales (RCTs) y cuasi-experimentales', practicalWork: 'Aplicación práctica de evaluación de impacto de políticas sociales' }
  ],
  enrolledCount: 115,
  startDate: '17 de Octubre, 2026',
  schedule: 'Sábado y Domingo, 20:00 - 21:30',
  modality: 'Online en vivo',
  featured: true
  },
  {
    id: 'curso-7',
    title: 'Microeconometría II: Modelos de Regresión Logística',
  level: 'Intermedio',
  track: 'Microeconometría & Elección Discreta',
  duration: '3 Sesiones (4.5 horas)',
  hours: 5,
  instructor: 'Lic. Carlos Daniel Pantoja Durán',
  instructorRole: 'Investigador',
  instructorAffiliation: 'Fundación Aru / UMSA / SOCIENCE',
  description: 'Modelos de elección discreta binaria y múltiple. Estimación, interpretación de efectos marginales y odds ratios en modelos Logit y Probit aplicados a las ciencias sociales.',
  tools: ['Stata', 'R'],
  syllabus: [
    { week: 1, topic: 'Fundamentos de los modelos de elección discreta', practicalWork: 'Especificación de funciones de probabilidad acumulada' },
    { week: 1, topic: 'Estimación e interpretación de modelos Logit y Probit', practicalWork: 'Cálculo e interpretación de efectos marginales en Stata' },
    { week: 1, topic: 'Aplicaciones de la regresión logística en economía y ciencias sociales', practicalWork: 'Modelado de determinantes del empleo e informalidad' }
  ],
  enrolledCount: 90,
  startDate: '29 de Octubre, 2026',
  schedule: 'Jueves, Martes y Jueves, 19:00 - 20:30',
  modality: 'Online en vivo',
  featured: false
  },
  {
    id: 'curso-8',
    title: 'Taller de Python para Análisis Económico',
  level: 'Inicial - Intermedio',
  track: 'Ciencia de Datos & Programación',
  duration: '1 Sesión (1.5 horas)',
  hours: 2,
  instructor: 'Lic. Daniela Vanessa Narváez Vargas',
  instructorRole: 'Analista en Inversión Extranjera y Operaciones de Financiamiento',
  instructorAffiliation: 'Banco Central de Bolivia (BCB) / SOCIENCE',
  description: 'Introducción al lenguaje Python y su entorno de desarrollo aplicado al análisis económico, manipulación de datos con Pandas y NumPy.',
  tools: ['Python', 'Pandas', 'NumPy', 'Jupyter Notebook'],
  syllabus: [
    { week: 1, topic: 'Introducción al lenguaje Python y su entorno de desarrollo', practicalWork: 'Configuración del entorno Jupyter/Colab y sintaxis básica' },
    { week: 1, topic: 'Manejo de librerías para análisis de datos (pandas, numpy)', practicalWork: 'Limpieza y transformación de series cuantitativas económicas' },
    { week: 1, topic: 'Aplicaciones de Python en el análisis económico', practicalWork: 'Visualización y automatización de reportes económicos' }
  ],
  enrolledCount: 150,
  startDate: '07 de Noviembre, 2026',
  schedule: 'Sábado, 20:00 - 21:30',
  modality: 'Online en vivo',
  featured: true
  }
];

export const MENTORS_DATA: MentorDocente[] = [
  {
    id: 'mentor-1',
    name: 'Dr. Iván Omar Velásquez Castellanos',
    role: 'Docente e Investigador',
    title: 'Profesor de Posgrado',
    department: 'Doctorado en Economía',
    university: 'Universidad Mayor de San Andrés (UMSA) / UNIVALLE',
    country: 'Bolivia',
    bio: 'Economista especializado en desarrollo económico, desigualdad, pobreza y movilidad social en Bolivia. Excoordinador del Programa en Bolivia de la Fundación KAS e Investigador Senior en ZEF (Universidad de Bonn).',
  specialties: ['Desarrollo Económico', 'Desigualdad y Pobreza', 'Historia Económica', 'Movilidad Social'],
    recentPublications: [
      { title: 'Un siglo de economía en Bolivia (Coordinación/Colaboración)', journal: 'Publicación de Referencia', year: 2020 },
    ],
      
    email: 'ivan.velasquez@umsa.bo',
    scholarUrl: 'https://scholar.google.com',
    orcid: '0000-0000-0000-0000',
    avatar: fotoIvanVelazquez,
    acceptingMentees: true
  },
  
  {
    id: 'mentor-2',
    name: 'MSc Osmar Bolívar Rosales',
    role: 'Jefe de Asuntos Económicos y Profesor de Posgrado',
  title: 'Especialista en IA para la Investigación Económica',
  department: 'Asuntos Económicos',
  university: 'Universidad Andina Simón Bolívar / CAINCO',
  country: 'Bolivia',
  bio: 'Economista especializado en inteligencia artificial, machine learning y métodos econométricos aplicados al análisis económico y políticas públicas. Galardonado con el Premio de Banca Central "Rodrigo Gómez" del CEMLA (2023).',
  specialties: ['Inteligencia Artificial Aplicada', 'Machine Learning', 'Nowcasting del PIB', 'Teledetección', 'Econometría'],
    recentPublications: [
      { title: 'Nowcasting del PIB mediante machine learning y teledetección', journal: 'Premio Rodrigo Gómez - CEMLA', year: 2023 },
    ],
    email: 'osmar.bolivar@cainco.org.bo',
    scholarUrl: 'https://scholar.google.com',
    orcid: '0000-0000-0000-0000',
    avatar: fotoOsmarBolivar,
    acceptingMentees: true
  },
  {
    id: 'mentor-3',
    name: 'MSc Pablo Cachaga Herrera',
    role: 'Docente Universitario y Ex-Subgerente de Banca Central',
  title: 'Cátedra de Economía y Métodos Cuantitativos',
  department: 'Carrera de Economía',
  university: 'Universidad Mayor de San Andrés (UMSA) / UTB',
  country: 'Bolivia',
  bio: 'Economista con amplia trayectoria en el Banco Central de Bolivia (BCB) y el Ministerio de Economía. Especialista en sector monetario, fiscal, operaciones del sector público y finanzas.',
  specialties: ['Sector Monetario y Fiscal', 'Inversión Extranjera Directa', 'Econometría Aplicada', 'Banca y Finanzas'],
  recentPublications: [
    { title: 'Inversión Extranjera Directa e implicancias macroeconómicas: Evidencia empírica para Bolivia', journal: 'Mención Honorífica Directorio BCB', year: 2022 }
  ],
    email: 'pablo.cachaga@umsa.bo',
    scholarUrl: 'https://scholar.google.com',
    orcid: '0000-0000-0000-0000',
    avatar: fotoPabloCachaga,
    acceptingMentees: true
  },
  {
    id: 'mentor-4',
    name: 'MSc Vidal Choque Atto',
    role: 'Analista del Sector Real Senior',
  title: 'Investigador Macroeconómico',
  department: 'Asesoría de Política Económica',
  university: 'Banco Central de Bolivia (BCB)',
  country: 'Bolivia',
  bio: 'Economista especializado en investigaciones macroeconómicas y modelos DSGE. Pionero en el desarrollo del primer modelo DSGE medioambiental para Bolivia.',
  specialties: ['Modelos DSGE', 'Economía Ambiental / Cambio Climático', 'Macroeconomía Aplicada', 'Economía Cuantitativa'],
  recentPublications: [
    { title: 'Cambio climático y fragilidad del sistema financiero', journal: 'Revista de Análisis del BCB', year: 2023 },
    { title: 'Efectos del COVID-19 en la actividad económica de Bolivia', journal: 'Revista de Análisis del BCB', year: 2022 }
  ],
  email: 'vidal.choque@bcb.gob.bo',
  scholarUrl: 'https://scholar.google.com',
  orcid: '0000-0000-0000-0000',
    avatar: fotoVidalCoque,
    acceptingMentees: true
  },
  {
    id: 'mentor-5',
    name: 'Lic. Elvis Cristian Vargas Usnayo',
    role: 'Investigador Asistente',
  title: 'Análisis Económico y Ciencia de Datos',
  department: 'Investigación',
  university: 'Universidad Mayor de San Andrés (UMSA) / Fundación Aru',
  country: 'Bolivia',
  bio: 'Economista orientado a la economía computacional, ciencia de datos y análisis de expectativas de inflación. Experiencia en consultoría de datos y auxiliaría de docencia.',
  specialties: ['Ciencia de Datos', 'Economía Computacional', 'Expectativas de Inflación', 'R & Python', 'Econometría'],
  recentPublications: [
    { title: 'Análisis de las expectativas de inflación en Bolivia', journal: 'Taller Académico Fundación Aru', year: 2024 }
  ],
  email: 'cristian.vargas@aru.org.bo',
  scholarUrl: 'https://scholar.google.com',
  orcid: '0000-0000-0000-0000',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    acceptingMentees: true
  },
  {
    id: 'mentor-6',
    name: 'MPA José Miguel Molina Fernández',
    role: 'Research Fellow',
  title: 'Investigador en Evaluación de Desarrollo',
  department: 'Oficina de Evaluación y Supervisión (OVE)',
  university: 'Banco Interamericano de Desarrollo (BID) / Harvard University',
  country: 'Estados Unidos',
  bio: 'Economista graduado con el Premio Raymond Vernon en Harvard (MPA/ID). Especializado en desarrollo productivo, finanzas para el desarrollo, mercados laborales y comercio internacional.',
  specialties: ['Desarrollo Productivo', 'Mercados Laborales', 'Informalidad Laboral', 'Ciclicidad Fiscal', 'Evaluación de Impacto'],
  recentPublications: [
    { title: 'Estudios sobre comercio internacional, informalidad laboral y ciclicidad fiscal en Bolivia', journal: 'Ciess Econométrica / BID', year: 2023 }
  ],
  email: 'jose.molina@iadb.org',
  scholarUrl: 'https://scholar.google.com',
  orcid: '0000-0000-0000-0000',
    avatar: fotoMiguelMolina,
    acceptingMentees: false
  },
  {
  id: 'mentor-7',
  name: 'Lic. Carlos Daniel Pantoja Durán',
  role: 'Investigador',
  title: 'Análisis de Pobreza y Mercado Laboral',
  department: 'Área de Investigación',
  university: 'Fundación Aru / UMSA',
  country: 'Bolivia',
  bio: 'Economista galardonado en el 18vo Encuentro de Economistas de Bolivia. Especializado en métodos cuantitativos, pronósticos con machine learning y análisis de brechas sociales.',
  specialties: ['Economía Laboral', 'Pobreza e Inclusión Social', 'Pseudopaneles', 'Pronósticos con Machine Learning'],
  recentPublications: [
    { title: 'Construcción de un Pseudopanel con Encuestas de Hogares para el Análisis de las Transiciones de Pobreza en Bolivia', journal: '18vo Encuentro de Economistas de Bolivia', year: 2025 },
    { title: 'Análisis de la brecha del ingreso laboral entre las personas con y sin discapacidad durante el periodo 2021', journal: 'Fundación Aru', year: 2023 }
  ],
  email: 'carlos.pantoja@aru.org.bo',
  scholarUrl: 'https://scholar.google.com',
  orcid: '0000-0000-0000-0000',
  avatar: fotoMiguelMolina,
  acceptingMentees: true
   },
  {
  id: 'mentor-8',
  name: 'Lic. Daniela Vanessa Narváez Vargas',
  role: 'Analista en Inversión Extranjera y Operaciones de Financiamiento',
  title: 'Gestión de Riesgos y Finanzas Públicas',
  department: 'Gerencia de Operaciones Internacionales',
  university: 'Banco Central de Bolivia (BCB)',
  country: 'Bolivia',
  bio: 'Economista con más de 10 años de experiencia en el sector público boliviano (BCB y SIN). Formación avanzada en Machine Learning aplicado a Banca Central y análisis de distribución de regalías.',
  specialties: ['Inversión Extranjera', 'Financiamiento Internacional', 'Gestión de Riesgos', 'Machine Learning en Banca Central'],
  recentPublications: [
    { title: 'Aplicación del índice de Theil para la reducción de la desigualdad interregional proveniente de la distribución de regalías', journal: 'Tesis de Licenciatura UCB', year: 2007 }
  ],
  email: 'daniela.narvaez@bcb.gob.bo',
  scholarUrl: 'https://scholar.google.com',
  orcid: '0000-0000-0000-0000',
  avatar: fotoMiguelMolina,
  acceptingMentees: true
   }
];

export const PROJECTS_DATA: Project[] = [
 {
  id: 'proj-1',
  title: 'Determinantes socioeconómicos y familiares del abandono escolar en adolescentes bolivianos mayores de 14 años: un análisis con regresión logística binomial',
  authors: [
    { name: 'Ernesto Ayala Attie', email: 'ernestoayalaattie25@gmail.com', institution: 'Universidad Mayor de San Andrés (UMSA)-Economía-Programa EcoLab' }
  ],
  abstract: 'La propuesta analiza los factores socioeconómicos, familiares y demográficos que inciden en la continuidad o el abandono escolar de los adolescentes bolivianos mayores de 14 años. Mediante el uso de un modelo de regresión logística binomial (Logit) basado en datos de la Encuesta de Hogares del Instituto Nacional de Estadística (INE), se evalúan determinantes como el ingreso del hogar, la educación de los padres, la zona de residencia (urbana/rural) y la inserción laboral temprana, diferenciando los motivos del abandono para ofrecer insumos orientados a políticas públicas.',
  year: 2025,
  category: ['Economía Laboral', 'Economía de la Educación', 'Desarrollo Social'],
  status: 'Propuesta de Investigación',
  journal: null,
  jelCodes: ['I21 (Análisis de la Educación)', 'J13 (Juventud y Trabajo)', 'I24 (Equidad Educativa)', 'J24 (Capital Humano)'],
  datasetUsed: 'Encuesta de Hogares (EH 2023) - Instituto Nacional de Estadística (INE) Bolivia',
  methodology: 'Regresión Logística Binomial (Modelo Logit)',
  
  downloadsCount: 0, 
  citations: 0,

  keyFindings: [
    'Mayor ingreso per cápita se correlaciona positivamente con la permanencia escolar.',
    'Hijos de jefes de hogar con educación secundaria/superior tienen mayor probabilidad de continuidad.',
    'Brecha urbano-rural persistente en tasas de abandono escolar a partir de los 14 años.',
    'Los varones enfrentan mayor riesgo de abandono por trabajo remunerado; las mujeres por labores de cuidado del hogar.'
  ]
},
  {
    id: 'proj-2',
    title: 'Análisis de los pequeños comerciantes de cerveza durante la Entrada del Gran Poder en La Paz, Bolivia',
    authors: [
  {
    name: 'Calcina Mamani Fabiola Belén',
    institution: 'Universidad Mayor de San Andrés (UMSA)-Economía-Programa EcoLab',
    photoUrl: 'https://drive.google.com/file/d/1SEfnJ6u0FBo73ftr9U32fcyIkCBSgzZA/view?usp=drive_link',
    bio: 'Estudiante de.... sus intereses son.....í'
  },
],
    abstract: 'El estudio analiza la dinámica económica, social y cultural de las pequeñas comerciantes (vivanderas) de cerveza durante la festividad de la Entrada del Gran Poder en La Paz. A partir de una muestra de 120 vendedoras, se evalúan la percepción de ingresos, el nivel de organización sindical, las capacitaciones y el impacto de esta actividad en la autonomía económica femenina en el sector informal.',
    year: 2025,
    category: ['Economía Informal', 'Economía Urbana', 'Género y Desarrollo'],
    status: 'Proyecto de Investigación',
    journal: null,
    jelCodes: ['J46 (Trabajo Informal)', 'J16 (Economía de Género)', 'Z13 (Economía Cultural)'],
    datasetUsed: 'Encuestas aplicadas a 120 vivanderas de las asociaciones "22 de Febrero" y "10 de Marzo" (La Paz, Septiembre 2025)',
    methodology: 'Enfoque Cuantitativo-Descriptivo con elementos Cualitativos (Análisis de frecuencias y escalas Likert)',
    downloadsCount: 0,
    citations: 0,
    keyFindings: [
      'El 95.8% (115 de 120) de las vivanderas pertenece a una asociación o sindicato.',
    'El 94.1% (113 de 120) recibió algún tipo de capacitación para la actividad.',
    'La mayoría de las vendedoras percibe ingresos medios entre 1.001 y 2.000 Bs por el evento.',
    'El grupo de edad entre 44 y 57 años concentra la mayor percepción de altos ingresos.'
    ]
  },
  {
    id: 'proj-3',
    title: 'Determinantes socioeconómicos y familiares del abandono escolar en adolescentes bolivianos mayores de 14 años: un análisis con regresión logística binomial',
    authors: [
      { name: 'Mamani Merma Gabriela Yuliana', institution: 'Universidad Mayor de San Andrés (UMSA)-Economía-Programa EcoLab'},
    ],
    abstract: 'El estudio investiga la relación entre la deuda pública y el desarrollo económico en Bolivia durante el período 2006-2024, evaluando cómo la composición del endeudamiento (interno vs. externo) y el pago de intereses afectan a la inversión pública y al Índice de Desarrollo Humano (IDH). Utilizando modelos econométricos de series de tiempo trimestrales (VECM y ARDL), la propuesta busca cuantificar los efectos de desplazamiento (crowding-out fiscal) y la reducción del espacio fiscal dedicado a gasto social.',
  year: 2024,
  category: ['Macroeconomía', 'Economía Fiscal', 'Desarrollo Económico'],
  status: 'Propuesta de Investigación',
  journal: null,
  jelCodes: ['H63 (Deuda Pública)', 'O11 (Análisis Macroeconómico del Desarrollo)', 'E62 (Política Fiscal)'],
  datasetUsed: 'Series de tiempo trimestrales (2006-2024) del MEFP, BCB, INE y PNUD (Crédito interno/externo, Intereses, Inversión Pública, IDH, TCR, IPC)',
  methodology: 'Cuantitativa Econométrica de Series de Tiempo (Pruebas de Cointegración de Johansen, Modelos VAR/VECM, ARDL / Bounds Testing y Funciones Impulso-Respuesta)',
    downloadsCount: 0,
    citations: 0,
    keyFindings: [
      'El crédito interno neto ha actuado como la principal variable de ajuste para el déficit fiscal en Bolivia, superando ampliamente al financiamiento externo.',
    'Se identifica un posible efecto crowding-out fiscal donde el aumento del servicio de la deuda desplaza al gasto en inversión pública y gasto social.',
    'La inversión pública sufrió una fuerte contracción desde 2014, cayendo a niveles comparables a los de hace 15 años.',
    'El estudio plantea que un mayor peso de los intereses limita la mejora sostenida del Índice de Desarrollo Humano (IDH).'
    ]
  },
{
  id: 'proj-4',
  title: 'Dinámica de los incrementos salariales sobre el poder adquisitivo y consumo familiar en Bolivia (2010-2024)',
  authors: [
    { name: 'Gutierrez Patty Mariela Wara', institution: 'Universidad Mayor de San Andrés (UMSA)-Economía-Programa EcoLab' }
  ],
  abstract: 'El proyecto describe la relación entre los incrementos del Salario Mínimo Nacional (SMN), la inflación acumulada (IPC) y el costo de la canasta básica en Bolivia entre 2010 y 2024. A través de un enfoque cuantitativo-descriptivo y aplicando la teoría keynesiana del consumo, se analiza en qué medida los ajustes salariales nominales han permitido sostener o mejorar el poder adquisitivo real de las familias bolivianas o si el proceso inflacionario ha neutralizado dicho impacto.',
  year: 2025,
  category: ['Economía Laboral', 'Mercado de Trabajo', 'Bienestar y Consumo'],
  status: 'Propuesta de Investigación',
  journal: null,
  jelCodes: ['J31 (Niveles y Estructura Salarial)', 'E24 (Empleo y Salarios)', 'E31 (Nivel de Precios e Inflación)', 'I31 (Bienestar General)'],
  datasetUsed: 'Datos estadísticos oficiales del Instituto Nacional de Estadística (INE) y el Ministerio de Economía y Finanzas Públicas (Salario Nominal, IPC, Canasta Básica)',
  methodology: 'Cuantitativa, Descriptiva y Longitudinal basada en análisis documental de fuentes secundarias y cálculo de tasas de crecimiento anual del salario real',
  
  downloadsCount: 0, 
  citations: 0,

  keyFindings: [
    'Plantea que los incrementos salariales nominales han tenido una efectividad limitada en el poder adquisitivo real debido al encarecimiento de la canasta básica.',
    'Identifica disparidades en el impacto del salario mínimo, mostrando mayor efectividad en centros urbanos como Santa Cruz y El Alto que en sectores rurales e informales.',
    'Evalúa la política de fijación salarial en Bolivia mediante el diálogo tripartito entre el Ejecutivo, centrales obreras y sector empresarial.',
    'Utiliza el marco de la Propensión Marginal a Consumir (PMC) keynesiana para explicar cómo las variaciones del salario real condicionan la demanda interna.'
  ]
},
  {
  id: 'proj-5',
  title: 'Dominancia Fiscal y Estabilidad Macroeconómica en Bolivia (2006-2024)',
  authors: [
    { name: 'Javier Angel Ramos Gomez', institution: 'Universidad Mayor de San Andrés (UMSA)-Economía-Programa EcoLab' }
  ],
  abstract: 'La propuesta investiga el impacto de la dominancia fiscal sobre la salud financiera del Banco Central de Bolivia (BCB) y la estabilidad de precios en el periodo 2006-2024. Empleando series trimestrales y un enfoque mixto (econometría de series de tiempo más análisis institucional), el estudio estima el grado de monetización del déficit fiscal y evalúa la evolución de la independencia del BCB mediante modelos SVAR/ARDL y reglas de política económica (Leeper, 1991).',
  year: 2025,
  category: ['Macroeconomía', 'Política Monetaria', 'Política Fiscal', 'Estabilidad Macroeconómica'],
  status: 'Propuesta de Investigación',
  journal: null,
  jelCodes: ['E52 (Política Monetaria)', 'E58 (Bancos Centrales y sus Funciones)', 'E62 (Política Fiscal)', 'E31 (Nivel de Precios e Inflación)'],
  datasetUsed: 'Datos trimestrales (2006Q1-2024Q4) del Banco Central de Bolivia (BCB), Ministerio de Economía y Finanzas Públicas (MEFP), Instituto Nacional de Estadística (INE) e IMF (IFS, WEO)',
  methodology: 'Cuantitativa de series de tiempo: Modelos SVAR, ARDL, Cointegración de Johansen, Causalidad de Granger y Reglas de Política Monetaria y Fiscal (Leeper, 1991) con prueba de Chow y Bai-Perron para quiebres estructurales',
  
  downloadsCount: 0, 
  citations: 0,

  keyFindings: [
    'Plantea evaluar la hipótesis de que el incremento del financiamiento fiscal por parte del BCB entre 2006 y 2024 se asocia con mayores presiones inflacionarias y deterioro patrimonial del ente emisor.',
    'Caracteriza el tránsito hacia un régimen de dominancia fiscal a partir del fin del ciclo de bonanza de materias primas en 2014.',
    'Identifica tres mecanismos de transmisión clave en Bolivia: compras directas de deuda, uso de reservas internacionales netas y represión financiera/controles de liquidez.',
    'Combina la especificación SVAR (inspirada en Espinosa Soriano, 2019) con la clasificación de regímenes de política activa/pasiva de Leeper (1991).'
  ]
},
{
  id: 'proj-6',
  title: 'El efecto de la inflación y la desocupación sobre los ciclos económicos en Bolivia, 1990-2024',
  authors: [
    { name: 'Limachi Surco Jorge Luis', institution: 'Universidad Mayor de San Andrés (UMSA)-Economía-Programa EcoLab' }
  ],
  abstract: 'El proyecto investiga la relación e impacto de la inflación y la tasa de desocupación sobre las fases expansivas y recesivas de los ciclos económicos en Bolivia entre 1990 y 2024. Mediante un enfoque cuantitativo e hipotético-deductivo, fundamentado en la teoría keynesiana y la Nueva Economía Keynesiana (NEK), se analiza cómo la rigidez de precios, las fricciones del mercado laboral y los shocks externos inciden en la estabilidad macroeconómica y el crecimiento del PIB real.',
  year: 2025,
  category: ['Macroeconomía', 'Ciclos Económicos', 'Inflación', 'Mercado de Trabajo'],
  status: 'Propuesta de Investigación',
  journal: null,
  jelCodes: ['E32 (Ciclos Económicos)', 'E31 (Nivel de Precios e Inflación)', 'E24 (Empleo y Desempleo)'],
  datasetUsed: 'Datos estadísticos del Instituto Nacional de Estadística (INE), Ministerio de Economía y Finanzas Públicas (MEFP) y Banco Central de Bolivia (BCB)',
  methodology: 'Cuantitativa y método hipotético-deductivo aplicado a series macroeconómicas (PIB real, IPC y desocupación)',
  
  downloadsCount: 0, 
  citations: 0,

  keyFindings: [
    'Plantea la hipótesis de que niveles moderados de inflación y desocupación contribuyen positivamente a la fase expansiva de los ciclos económicos en Bolivia.',
    'Revisa la taxonomía clásica de ciclos económicos (Kitchin, Juglar, Kuznets y Kondratiev) para contextualizar la periodicidad de las fluctuaciones en economías pequeñas y abiertas.',
    'Sustenta el análisis en la Nueva Economía Keynesiana (NEK), enfatizando los costos de menú, rigideces nominales y contratos escalonados en la persistencia del desempleo e inflación.',
    'Sintetiza la literatura empírica previa en Bolivia (Vargas 2013, Santander 2022 y Mora 2021) sobre la validez de la Curva de Phillips y la sincronización entre ciclos económicos y financieros.'
  ]
},
{
  id: 'proj-7',
  title: 'Análisis y pronósticos de ratios de riesgo de liquidez en IFD y entidades especializadas en microfinanzas del sistema financiero boliviano (trimestral: dic-2016-jun-2025)',
  authors: [
    { name: 'Guarachi Huanca Juan Andrés', institution: 'Universidad Mayor de San Andrés (UMSA)-Economía-Programa EcoLab' }
  ],
  abstract: 'El proyecto cuantifica y pronostica el riesgo de liquidez en el sistema microfinanciero boliviano, diferenciando entre las Instituciones Financieras de Desarrollo (IFD) y las Entidades Especializadas en Microfinanzas (EEM). Empleando datos trimestrales de la ASFI (2016-2025), la investigación evalúa indicadores de liquidez inmediata, ampliada, cobertura de obligaciones y fondeo externo mediante modelos econometricos ARIMA para generar proyecciones a 4 trimestres y formular recomendaciones regulatorias y de gestión de riesgo.',
  year: 2025,
  category: ['Sistema Financiero', 'Microfinanzas', 'Riesgo de Liquidez', 'Econometría Aplicada'],
  status: 'Propuesta de Investigación',
  journal: null,
  jelCodes: ['G21 (Bancos y Otras Instituciones Financieras)', 'G32 (Gestión de Riesgos y Liquidez)', 'C32 (Modelos de Series de Tiempo)'],
  datasetUsed: 'Datos estadísticos oficiales de la Autoridad de Supervisión del Sistema Financiero (ASFI) a nivel agregacional e institucional trimestral (dic-2016 a jun-2025)',
  methodology: 'Cuantitativa, descriptiva y predictiva mediante modelos de series de tiempo ARIMA, selección por AIC/BIC y pruebas de diagnóstico econométrico (ADF, Ljung-Box, ARCH, Jarque-Bera)',
  
  downloadsCount: 0, 
  citations: 0,

  keyFindings: [
    'Plantea contrastar empíricamente si existen diferencias estadísticamente significativas en las métricas de riesgo de liquidez entre IFD y EEM en Bolivia.',
    'Identifica diferencias estructurales: las IFD muestran mayor exposición a crédito productivo y rural con desajustes temporales más marcados y dependencia de fondeo externo, mientras que las EEM presentan mayor tracción en captación de depósitos locales.',
    'Establece la calibración de modelos ARIMA para la proyección out-of-sample de 4 trimestres en ratios claves (Liquidez Inmediata, Liquidez Ampliada y Cobertura de Obligaciones).',
    'Revisa la normativa de ASFI y marcos internacionales (Basilea III: LCR/NSFR, Diamond & Dybvig) para diseñar umbrales de alerta temprana y recomendaciones de gestión de activos y pasivos.'
  ]
},
{
  id: 'proj-8',
  title: 'Impacto de la política monetaria sobre los créditos otorgados por las entidades de intermediación financiera en Bolivia, período 2005-2024',
  authors: [
    { name: 'Chipana Challco Julia Elena', institution: 'Universidad Mayor de San Andrés (UMSA)-Economía-Programa EcoLab' }
  ],
  abstract: 'La propuesta evalúa la efectividad y los canales de transmisión de la política monetaria sobre la oferta de crédito del sistema bancario boliviano entre 2005 y 2024. A través de la adaptación del modelo microteórico de Kashyap & Stein y la estimación de econometría de datos de panel, la investigación busca capturar la heterogeneidad institucional (tamaño, liquidez, dolarización) para determinar cómo responden los préstamos por destino económico (productivo, vivienda, consumo) ante shocks en la tasa de política monetaria y encaje legal.',
  year: 2025,
  category: ['Política Monetaria', 'Transmisión Monetaria', 'Canal de Crédito', 'Econometría de Panel'],
  status: 'Propuesta de Investigación',
  journal: null,
  jelCodes: ['E52 (Política Monetaria)', 'E58 (Bancos Centrales y sus Políticas)', 'G21 (Bancos y Otras Instituciones Financieras)', 'C23 (Modelos de Datos de Panel)'],
  datasetUsed: 'Registros y datos estadísticos de la Autoridad de Supervisión del Sistema Financiero (ASFI), Banco Central de Bolivia (BCB), INE y Ministerio de Economía y Finanzas Públicas (2005-2024)',
  methodology: 'Cuantitativa mediante estimaciones econométricas para datos de panel con interacciones micro-macro (modelo tipo Kashyap & Stein / Díaz-Quevedo & Rocabado) para cuantificar elasticidades y heterogeneidad por tipo de entidad',
  
  downloadsCount: 0, 
  citations: 0,

  keyFindings: [
    'Plantea la hipótesis de que una política monetaria expansiva incrementa el volumen total de créditos otorgados por las EIF, pero con efectos asimétricos según la heterogeneidad institucional.',
    'Adopta la estructura microeconómica de Kashyap & Stein (1995, 2000) y Ehrmann et al. (2003) para evaluar si el nivel de liquidez y tamaño bancario alteran la sensibilidad de la oferta crediticia.',
    'Analiza la descomposición del crédito por destino económico (productivo, vivienda y consumo) y su respuesta frente a instrumentos como la tasa de encaje legal y Operaciones de Mercado Abierto (OMA).',
    'Incorpora variables de control macroeconómico clave en el contexto boliviano, como el grado de dolarización del sistema, la tasa de inflación, el ciclo económico (PIB real) y las condiciones externas.'
  ]
},
{
  id: 'proj-9',
  title: 'Crecimiento económico en la pobreza multidimensional de Bolivia 2005-2024',
  authors: [
    { name: 'Maria Saravia', institution: 'Universidad Mayor de San Andrés (UMSA)-Economía-Programa EcoLab' }
  ],
  abstract: 'La propuesta investiga la relación entre el crecimiento del PIB per cápita real y las dimensiones de la pobreza multidimensional (educación, salud, vivienda y empleo) en Bolivia (2005-2024). Evalúa cómo el boom de recursos naturales y las políticas redistributivas resolvieron privaciones básicas de infraestructura, pero fallaron en transformar capacidades estructurales y la calidad de los servicios públicos, manteniendo una marcada vulnerabilidad ante crisis o desaceleraciones económicas.',
  year: 2025,
  category: ['Crecimiento Económico', 'Pobreza Multidimensional', 'Desarrollo Humano', 'Series de Tiempo'],
  status: 'Propuesta de Investigación',
  journal: null,
  jelCodes: ['I32 (Medición y Análisis de la Pobreza)', 'O11 (Análisis Económico del Desarrollo)', 'O54 (Estudios Económicos Regionales: América Latina)', 'C32 (Modelos de Series de Tiempo)'],
  datasetUsed: 'Datos secundarios provenientes del INE, Fundación ARU, CEDLA, Banco Mundial, CEPAL, PNUD y UNESCO (2005-2024)',
  methodology: 'Cuantitativa y correlacional mediante el análisis de series de tiempo no experimentales. Procesa modelos econométricos (MCO, ARDL o VAR según pruebas de estacionariedad) para determinar elasticidades de la pobreza multidimensional frente al PIB per cápita',
  
  downloadsCount: 0, 
  citations: 0,

  keyFindings: [
    'Sostiene la hipótesis de que existe una desconexión entre el crecimiento del PIB per cápita y los avances estructurales en la pobreza multidimensional en Bolivia.',
    'Diferencia dos fases clave del periodo: el ciclo expansivo (2006-2014) con captura estatal del excedente de hidrocarburos, y la fase de desaceleración y shocks (2015-2024).',
    'Constata que la bonanza redujo la pobreza por ingresos y privaciones asociadas a infraestructura física (electricidad y agua), pero no mejoró significativamente las dimensiones de calidad (aprendizaje y salud) ni la calidad del empleo.',
    'Fundamenta el análisis bajo los marcos teóricos de capacidades (Alkire-Foster, Amartya Sen) y el enfoque estructuralista latinoamericano sobre desarrollo (Solow, Ocampo, Wanderley).'
  ]
},
{
  id: 'proj-10',
  title: 'El efecto de las expectativas de inflación en el consumo de los hogares en Bolivia 2006 - 2024',
  authors: [
    { name: 'Sanga Castillo Oliver Adalid', institution: 'Universidad Mayor de San Andrés (UMSA)-Economía-Programa EcoLab' }
  ],
  abstract: 'El proyecto cuantifica el impacto causal de las expectativas inflacionarias sobre la toma de decisiones de consumo de las familias bolivianas entre 2006 y 2024. A través de series de tiempo de la Encuesta de Expectativas Económicas del BCB y datos del INE, la investigación evalúa cómo el pesimismo sistemático de las familias incentiva la transferencia intertemporal de consumo del futuro al presente, planteando un marco econometric con modelos ADL.',
  year: 2025,
  category: ['Macroeconomía', 'Consumo de los Hogares', 'Expectativas Inflacionarias', 'Series de Tiempo'],
  status: 'Propuesta de Investigación',
  journal: null,
  jelCodes: ['D84 (Expectativas)', 'E21 (Consumo y Ahorro)', 'E31 (Nivel de Precios e Inflación)', 'C32 (Modelos de Series de Tiempo)'],
  datasetUsed: 'Encuesta Mensual de Expectativas Económicas del Banco Central de Bolivia (BCB) y Serie Histórica del Producto Interno Bruto y Cuentas Nacionales del Instituto Nacional de Estadística (INE) (2006-2024)',
  methodology: 'Cuantitativa y predictiva fundamentada en modelos de Autorregresivos Distribuido con Rezagos (ADL), evaluando rezagos óptimos mediante criterios AIC/BIC y análisis de correlación de Pearson intertemporal',
  
  downloadsCount: 0, 
  citations: 0,

  keyFindings: [
    'Sostiene la hipótesis de que expectativas de inflación altas a corto plazo provocan un adelantamiento del consumo presente en las familias para proteger su bienestar antes del alza de precios.',
    'Muestra descriptivamente que la inflación esperada en las encuestas del BCB es sistemáticamente superior a la inflación efectiva del INE (con un error promedio de brecha de 0.3047), revelando un sesgo pesimista en los agentes.',
    'Registra un coeficiente de correlación de Pearson positivo (rho = 0.5467) entre las expectativas de inflación y el consumo acumulado de los hogares.',
    'Enmarca la discusión teórica combinando la Hipótesis del Ingreso Permanente (Friedman), Ciclo de Vida (Modigliani) y marcos de Expectativas Adaptativas e Incertidumbre (Cagan, Rocabado).'
  ]
},
{
  id: 'proj-11',
  title: 'Efectos de la Aplicación de la Ley de Educación Avelino Siñani - Elizardo Pérez Sobre el Índice de Desarrollo Humano en Bolivia',
  authors: [
    { name: 'Mendoza Urizar Pablo Daniel', institution: 'Universidad Mayor de San Andrés (UMSA)-Economía-Programa EcoLab' }
  ],
  abstract: 'El proyecto plantea evaluar cuantitativamente el efecto causal de la Ley de Educación N° 070 (promulgada en 2010) sobre la trayectoria del Índice de Desarrollo Humano (IDH) en Bolivia durante el período 2010-2023. Ante la escasez de evaluaciones empíricas objetivas sobre los resultados del modelo educativo descolonizador y sociocomunitario, la investigación propone construir un contrafactual óptimo mediante el Método de Control Sintético (SCM) utilizando datos de panel de países latinoamericanos comparables.',
  year: 2025,
  category: ['Evaluación de Impacto', 'Economía de la Educación', 'Desarrollo Humano', 'Econometría Causal'],
  status: 'Propuesta de Investigación',
  journal: null,
  jelCodes: ['I25 (Educación y Desarrollo Económico)', 'I28 (Política Pública Educativa)', 'O15 (Recursos Humanos y Desarrollo Humano)', 'C23 (Modelos de Datos de Panel)'],
  datasetUsed: 'Datos secundarios de panel (1990-2023) extraídos del Programa de las Naciones Unidas para el Desarrollo (PNUD), Indicadores del Desarrollo Mundial (IDM) del Banco Mundial y Perspectivas de la Economía Mundial (WEO) del FMI',
  methodology: 'Cuantitativa y de inferencia causal basada en el Método de Control Sintético (Abadie et al., 2003, 2010). Estima el Efecto Causal del Tratamiento sobre los Tratados (ATT) mediante la brecha entre la Bolivia real y una Bolivia sintética construida con optimización ponderada de un grupo de donantes regional',
  
  downloadsCount: 0, 
  citations: 0,

  keyFindings: [
    'Plantea la necesidad de superar el debate ideológico cualitativo sobre la Ley 070 midiendo cuantitativamente su impacto real en las dimensiones del IDH (educación, ingresos y salud).',
    'Justifica el uso del Método de Control Sintético debido a que relaja el supuesto restrictivo de "tendencias paralelas" requerido por Diferencias en Diferencias, inapropiado para comparar trayectorias de desarrollo nacional.',
    'Somete el modelo a un diseño riguroso de validación empírica mediante pruebas de placebo en el espacio (In-Space), placebo en el tiempo (In-Time) y análisis de sensibilidad de exclusión iterativa (Leave-One-Out).',
    'Conecta la reforma educativa con la Teoría del Capital Humano (Schultz, Becker), evaluando los canales de productividad, años de escolaridad y hábitos de preservación de la salud.'
  ]
},
{
  id: 'proj-12',
  title: 'Efectos del Impuesto a las Transacciones Financieras (ITF) en los depósitos del sector financiero periodo 2014-2024',
  authors: [
    { name: 'Ramses Rodrigo Yujra Mamani', institution: 'Universidad Mayor de San Andrés (UMSA)-Economía-Programa EcoLab' }
  ],
  abstract: 'La propuesta investiga el impacto del Impuesto a las Transacciones Financieras (ITF) sobre la captación de depósitos en el sistema bancario boliviano. Revisa cómo este tributo, originalmente concebido en la teoría como una Tasa Tobin para reducir la volatilidad cambiaria y acelerar la desdolarización, afectó la conducta de los depositantes e influyó en la desconfianza del público frente a la intermediación financiera en moneda extranjera.',
  year: 2025,
  category: ['Sistema Financiero', 'Política Fiscal', 'Desdolarización', 'Depósitos Bancarios'],
  status: 'Propuesta de Investigación',
  journal: null,
  jelCodes: ['G21 (Banca y Instituciones Financieras)', 'H25 (Impuestos a los Negocios y Capital)', 'E44 (Mecanismos Financieros y Macroeconomía)', 'F31 (Tipos de Cambio y Divisas)'],
  datasetUsed: 'Datos de recaudación tributaria del Ministerio de Economía y Finanzas Públicas (MEFP) y estadísticas de depósitos del sistema financiero de la Autoridad de Supervisión del Sistema Financiero (ASFI) (2005-2024)',
  methodology: 'Enfoque cuantitativo-deductivo a partir de análisis de series de tiempo de variaciones porcentuales anuales del ITF y los depósitos en moneda extranjera',
  
  downloadsCount: 0, 
  citations: 0,

  keyFindings: [
    'Plantea la hipótesis de que el ITF mermó la preferencia de los agentes por mantener ahorros en el sistema financiero formal, desincentivando los depósitos.',
    'Analiza el ITF bajo el concepto original de la "Tasa Tobin" de James Tobin (1978), adaptada en Bolivia por la Ley 843 y modificaciones posteriores para desdolarizar la economía.',
    'Muestra una alta correlación visual entre las caídas de recaudación del ITF y la contracción de los depósitos en moneda extranjera, evidenciada de forma pronunciada en el periodo 2023-2024.',
    'Relaciona el desincentivo tributario con el surgimiento de distorsiones en el mercado de divisas y la pérdida de reservas del sistema bancario.'
  ]
},
{
  id: 'proj-13',
  title: 'Correlación entre la inflación (interna y externa) y el tipo de cambio paralelo en Bolivia: Análisis descriptivo 2024-2025',
  authors: [
    { name: 'Robert Arredondo', institution: 'Universidad Mayor de San Andrés (UMSA)-Economía-Programa EcoLab' }
  ],
  abstract: 'La propuesta aborda las presiones inflacionarias y la brecha cambiaria en Bolivia durante el periodo 2024-2025. Mediante un enfoque descriptivo y de series de tiempo, el estudio analiza cómo la inflación interna y la inflación importada se relacionan con las fluctuaciones y la volatilidad del tipo de cambio informal (registrado en plataformas peer-to-peer y medios), evaluando su impacto en el poder adquisitivo y la estabilidad macroeconómica.',
  year: 2025,
  category: ['Macroeconomía', 'Economía Internacional', 'Mercado Cambiario', 'Análisis Inflacionario'],
  status: 'Propuesta de Investigación',
  journal: null,
  jelCodes: ['E31 (Nivel del Precio, Inflación, Precios Relativos)', 'F31 (Tipos de Cambio y Mercado Divisas)', 'F41 (Macroeconomía de la Economía Abierta)', 'E52 (Política Monetaria)'],
  datasetUsed: 'Series mensuales del IPC del Banco Central de Bolivia / INE (enero 2024 - junio 2025), indicadores de inflación global del Banco Mundial/FMI (WEO y Reportes Art. IV) y cotizaciones del tipo de cambio paralelo de plataformas P2P (Binance) y reportes de prensa',
  methodology: 'Descriptiva y análisis explortatorio de series de tiempo mediante gráficos comparativos, tendencias y coeficientes de correlación simple entre el tipo de cambio informal y los componentes de inflación interna e importada',
  
  downloadsCount: 0, 
  citations: 0,

  keyFindings: [
    'Plantea la hipótesis de que tanto los choques inflacionarios externos como la dinámica del IPC interno muestran una correlación directa con el incremento y la volatilidad del tipo de cambio paralelo.',
    'Pone énfasis en la medición del "pass-through" (traspaso) del tipo de cambio no oficial a los precios de la canasta básica familiar.',
    'Utiliza fuentes alternas no tradicionales (como Binance P2P y monitoreo de prensa) para capturar la cotización real del dólar en el mercado informal ante la ausencia de una tasa oficial flotante.',
    'Fundamenta su revisión bibliográfica en estudios clásicos y recientes del Banco Mundial y el BID sobre mercados cambiarios paralelos y mecanismos de transmisión de precios en América Latina.'
  ]
},
{
  id: 'proj-14',
  title: 'Viabilidad económica y potencial impacto ambiental y social de la producción de biocombustibles a partir de residuos urbanos (aceites usados, plásticos y llantas) en La Paz y El Alto, Bolivia',
  authors: [
    { name: 'Victor Manuel Cossio', institution: 'Universidad Mayor de San Andrés (UMSA)-Economía-Programa EcoLab' }
  ],
  abstract: 'La propuesta investiga la viabilidad técnica, financiera y socioambiental de implantar una planta de conversión de residuos sólidos urbanos en biocombustibles para el área metropolitana de La Paz y El Alto. Frente a la generación conjunta de 464.336 toneladas anuales de basura, la investigación evalúa la transformación de plásticos, llantas y aceites en combustible y explora un módulo de microalgas, justificando el emplazamiento industrial en El Alto por sus ventajas territoriales.',
  year: 2025,
  category: ['Economía Ambiental', 'Valorización Energética', 'Gestión de Residuos Sólidos', 'Transición Energética'],
  status: 'Propuesta de Investigación',
  journal: null,
  jelCodes: ['Q42 (Energías Renovables)', 'Q53 (Gestión de Residuos y Contaminación)', 'Q54 (Cambio Climático y Emisiones)', 'O13 (Economía de la Energía y Recursos)'],
  datasetUsed: 'Estudios de caracterización de residuos sólidos del GAMLP (2023), datos de producción de residuos de Vidaurre (2020), registros de inversión pública de Fundación Jubileo, INE y MMAYA, y entrevistas a empresas privadas del sector (BIT, Falcon Group)',
  methodology: 'Enfoque mixto: evaluación cualitativa-documental, matriz multicriterio de impacto ambiental/social, entrevistas a actores clave y modelado financiero (VAN, TIR, CAPEX, OPEX y payback)',
  
  downloadsCount: 0, 
  citations: 0,

  keyFindings: [
    'Identifica que más del 40% de los residuos producidos en el eje metropolitano La Paz-El Alto son potencialmente valorizables, destacando un 17,8% de plásticos (35.800 t/año).',
    'Justifica a El Alto como el nodo industrial óptimo para la planta debido a la disponibilidad de terreno plano frente a la topografía accidentada y restrictiva de La Paz.',
    'Plantea una hipótesis escalonada donde el modelo de negocio inicial centrado en aceites usados presenta la mayor viabilidad inmediata frente a barreras normativas y de acopio.',
    'Evalúa la incorporación de tecnología de cultivo de microalgas para capturar CO2 residual del proceso e incrementar la producción de biodiésel.'
  ]
},
{
  id: 'proj-15',
  title: 'Determinantes de la Brecha de Género en el Mercado Laboral Femenino: Un Análisis Comparativo de Bolivia, Perú y Ecuador (2001-2022)',
  authors: [
    { name: 'Violeta Guarachi Huanca', institution: 'Universidad Mayor de San Andrés (UMSA)-Economía-Programa EcoLab' }
  ],
  abstract: 'La propuesta investiga las determinantes de la brecha salarial de género en tres países de la comunidad andina (Bolivia, Perú y Ecuador) entre 2001 y 2022. Pone a prueba la paradoja según la cual el aumento en la escolaridad y en la participación laboral de las mujeres no reduce automáticamente la brecha de ingresos, debido a la sobrerepresentación en el empleo informal, la segregación ocupacional y la carga del trabajo no remunerado de cuidados, agravada tras choques exógenos como el COVID-19.',
  year: 2025,
  category: ['Economía Laboral', 'Economía de Género', 'Econometría de Datos de Panel', 'Desarrollo Económico Regional'],
  status: 'Propuesta de Investigación',
  journal: null,
  jelCodes: ['J16 (Economía de Género y Discriminación)', 'J21 (Oferta de Trabajo y Participación)', 'J31 (Estructura Salarial y Brechas)', 'C23 (Modelos de Datos de Panel)', 'O54 (Economía de América Latina)'],
  datasetUsed: 'Datos de panel secundarios extraídos de las plataformas oficiales CEPALSTAT y Banco Mundial (2001-2022) para Bolivia, Perú y Ecuador',
  methodology: 'Modelo econométrico de Datos de Panel con Efectos Fijos (FE) controlado por errores estándar agrupados por período, incluyendo variables explicativas de escolaridad, tasa de desempleo, ingreso medio, participación laboral y una variable dummy estructural para el choque exógeno del año 2020 (COVID-19)',
  
  downloadsCount: 0, 
  citations: 0,

  keyFindings: [
    'Demuestra empíricamente la persistencia de una amplia brecha salarial en los tres países andinos a pesar del crecimiento constante en los años de escolaridad promedio femenina.',
    'Identifica picos críticos en el ensanchamiento de la brecha de género durante choques exógenos (crisis financiera de 2008 y crisis sanitaria de 2020).',
    'Conecta el marco teórico clásico del capital humano (Becker) y el sesgo de selección (Heckman) con desarrollos latinoamericanos sobre informalidad y discriminación estructural (Ñopo, Velasco y Yáñez).',
    'Plantea la necesidad de complementar los incrementos de escolaridad con políticas públicas directas sobre economía del cuidado e inserción laboral formal.'
  ]
},
  {
    id: 'proj-16',
    title: 'Actualización del Cálculo del Índice Multidimensional de Calidad de Empleo (IMCE), Nacional y Departamental de Bolivia (2011-2023)',
    authors: [
      { name: 'Flores Montalvo, Guido Orlando', institution: 'Universidad Mayor de San Andrés (UMSA)-Economía-Programa EcoLab' },
    ],
    abstract: 'La investigación plantea la actualización y extensión del Índice Multidimensional de Calidad de Empleo (IMCE) en Bolivia para el período 2011-2023 a nivel nacional y departamental. Utilizando la metodología Alkire-Foster aplicada a las Encuestas Permanentes de Hogares (EPH) del INE, el proyecto evalúa privaciones laborales en dimensiones clave: ingresos, seguridad laboral y condiciones de empleo, con el fin de aportar evidencia empírica alineada al ODS 8 sobre empleo decente y desigualdades en el mercado de trabajo.',
  year: 2025,
  category: ['Economía Laboral', 'Mercado de Trabajo', 'Desarrollo Económico', 'Bienestar Multidimensional'],
  status: 'Propuesta de Investigación',
  journal: null,
  jelCodes: ['J21 (Oferta de Trabajo y Empleo)', 'J81 (Condiciones de Trabajo)', 'I32 (Medición de Pobreza)', 'O15 (Recursos Humanos)'],
  datasetUsed: 'Microdatos de la Encuesta Permanente de Hogares (EPH) del Instituto Nacional de Estadística (INE) de Bolivia (2011-2023)',
  methodology: 'Cuantitativa mediante el Método Alkire-Foster de doble conteo para privaciones traslapadas (Cálculo de Incidencia H, Intensidad A e Índice Agregado M0)',
    keyFindings: [
      'Reducción de 32 minutos diarios en traslados para hogares de bajos ingresos.',
      'Plusvalía capturada por precios de vivienda no superó el 4.2%, evitando gentrificación severa.',
      'Ahorro neto anual de 145,000 toneladas de CO2 equivalente.'
    ],
    downloadsCount: 0,
    citations: 0
  }
];

export const DATASETS_DATA: EconomicDataset[] = [
  {
    id: 'dataset-macro-1',
    title: 'Observatorio Macroeconómico Trimestral de América Latina (OM-LATAM)',
    code: 'ECOLAB_MACRO_LATAM_2025',
    category: 'Macroeconómico',
    frequency: 'Trimestral',
    source: 'Bancos Centrales, Institutos de Estadística e INEGI/INDEC/DANE procesados por EcoLab',
    timeCoverage: '2000:Q1 - 2025:Q4',
    description: 'Series homogéneas desestacionalizadas de Crecimiento del PIB, Inflación Interanual, Tasa de Política Monetaria (TPM), Desempleo, Saldo en Cuenta Corriente y Coeficiente de Gini.',
    indicators: ['PIB Real (% YoY)', 'Inflación IPC (%)', 'Tasa de Interés Política Monetaria (%)', 'Tasa de Desempleo (%)', 'Saldo Comercial (M USD)', 'Índice de Gini'],
    lastUpdated: '15 de Enero de 2026',
    data: [
      { date: '2020:Q1', gdpGrowth: 1.2, inflation: 3.4, unemployment: 8.5, interestRate: 4.25, tradeBalance: 1200, giniIndex: 0.485 },
      { date: '2020:Q2', gdpGrowth: -11.8, inflation: 2.1, unemployment: 16.2, interestRate: 2.50, tradeBalance: 2400, giniIndex: 0.512 },
      { date: '2020:Q3', gdpGrowth: -6.4, inflation: 2.8, unemployment: 14.8, interestRate: 1.75, tradeBalance: 1900, giniIndex: 0.505 },
      { date: '2020:Q4', gdpGrowth: -2.1, inflation: 3.2, unemployment: 12.3, interestRate: 1.75, tradeBalance: 1500, giniIndex: 0.498 },
      { date: '2021:Q1', gdpGrowth: 2.8, inflation: 4.1, unemployment: 11.2, interestRate: 2.00, tradeBalance: 1600, giniIndex: 0.490 },
      { date: '2021:Q2', gdpGrowth: 14.5, inflation: 5.6, unemployment: 10.4, interestRate: 3.00, tradeBalance: 1100, giniIndex: 0.484 },
      { date: '2021:Q3', gdpGrowth: 6.7, inflation: 7.2, unemployment: 9.8, interestRate: 5.25, tradeBalance: 800, giniIndex: 0.480 },
      { date: '2021:Q4', gdpGrowth: 5.2, inflation: 8.8, unemployment: 8.9, interestRate: 7.50, tradeBalance: 400, giniIndex: 0.478 },
      { date: '2022:Q1', gdpGrowth: 4.6, inflation: 10.1, unemployment: 8.4, interestRate: 9.00, tradeBalance: 200, giniIndex: 0.475 },
      { date: '2022:Q2', gdpGrowth: 3.9, inflation: 11.4, unemployment: 8.1, interestRate: 11.25, tradeBalance: -300, giniIndex: 0.473 },
      { date: '2022:Q3', gdpGrowth: 2.8, inflation: 10.8, unemployment: 7.9, interestRate: 12.75, tradeBalance: -100, giniIndex: 0.471 },
      { date: '2022:Q4', gdpGrowth: 1.9, inflation: 9.4, unemployment: 7.8, interestRate: 13.00, tradeBalance: 500, giniIndex: 0.469 },
      { date: '2023:Q1', gdpGrowth: 1.4, inflation: 8.1, unemployment: 7.9, interestRate: 12.50, tradeBalance: 900, giniIndex: 0.468 },
      { date: '2023:Q2', gdpGrowth: 2.1, inflation: 6.5, unemployment: 7.6, interestRate: 11.50, tradeBalance: 1400, giniIndex: 0.466 },
      { date: '2023:Q3', gdpGrowth: 2.4, inflation: 5.2, unemployment: 7.4, interestRate: 10.25, tradeBalance: 1700, giniIndex: 0.464 },
      { date: '2023:Q4', gdpGrowth: 2.7, inflation: 4.4, unemployment: 7.2, interestRate: 9.00, tradeBalance: 2100, giniIndex: 0.462 },
      { date: '2024:Q1', gdpGrowth: 2.5, inflation: 4.0, unemployment: 7.1, interestRate: 8.25, tradeBalance: 2300, giniIndex: 0.460 },
      { date: '2024:Q2', gdpGrowth: 2.8, inflation: 3.8, unemployment: 6.9, interestRate: 7.50, tradeBalance: 2500, giniIndex: 0.458 },
      { date: '2024:Q3', gdpGrowth: 3.1, inflation: 3.5, unemployment: 6.7, interestRate: 6.75, tradeBalance: 2700, giniIndex: 0.456 },
      { date: '2024:Q4', gdpGrowth: 3.3, inflation: 3.2, unemployment: 6.5, interestRate: 6.00, tradeBalance: 2900, giniIndex: 0.454 },
      { date: '2025:Q1', gdpGrowth: 3.2, inflation: 3.1, unemployment: 6.4, interestRate: 5.50, tradeBalance: 3100, giniIndex: 0.453 },
      { date: '2025:Q2', gdpGrowth: 3.4, inflation: 2.9, unemployment: 6.3, interestRate: 5.00, tradeBalance: 3250, giniIndex: 0.451 },
      { date: '2025:Q3', gdpGrowth: 3.5, inflation: 2.8, unemployment: 6.1, interestRate: 4.75, tradeBalance: 3400, giniIndex: 0.449 },
      { date: '2025:Q4', gdpGrowth: 3.6, inflation: 2.7, unemployment: 6.0, interestRate: 4.50, tradeBalance: 3500, giniIndex: 0.448 }
    ]
  },
  {
    id: 'dataset-labor-2',
    title: 'Panel Armonizado de Empleo, Salarios e Informalidad',
    code: 'ECOLAB_LABOR_PANEL_2025',
    category: 'Laboral & Salarios',
    frequency: 'Mensual',
    source: 'Encuestas continuas de empleo homologadas (ENAHO, EPH, CASEN, ENOE)',
    timeCoverage: '2010 - 2025',
    description: 'Microdatos procesados con ponderadores muestrales calibrados, desglose por género, nivel educativo, quintil de ingresos y formalidad en la seguridad social.',
    indicators: ['Tasa de Informalidad (%)', 'Brecha Salarial de Género (%)', 'Subempleo Horario (%)', 'Salario Real Promedio (Índice 2015=100)'],
    lastUpdated: '10 de Febrero de 2026',
    data: []
  },
  {
    id: 'dataset-trade-3',
    title: 'Matriz de Complejidad Económica y Flujos Comerciales Bilaterales',
    code: 'ECOLAB_TRADE_ATLAS_2024',
    category: 'Comercio Exterior',
    frequency: 'Anual',
    source: 'UN Comtrade, Aduanas Nacionales y Harvard Growth Lab',
    timeCoverage: '1995 - 2024',
    description: 'Espacio de productos (Product Space), índice de complejidad económica (ECI), ventajas comparativas reveladas y emisiones incorporadas en exportaciones.',
    indicators: ['Índice de Complejidad Económica (ECI)', 'Diversificación de la Canasta', 'Arancel Ponderado Medio (%)'],
    lastUpdated: '28 de Diciembre de 2025',
    data: []
  }
];

export const RESOURCES_DATA: ResourceItem[] = [
  {
    id: 'res-1',
    title: 'Plantilla de Tesis y Working Paper en LaTeX (Estilo American Economic Review)',
    type: 'Plantilla Académica',
    language: 'LaTeX',
    author: 'Comité Editorial EcoLab',
    description: 'Estructura lista para compilar en Overleaf o local con BibTeX para citas automáticas, tablas formateadas con estargazer / booktabs y diseño de figuras vectoriales de alta resolución.',
    tags: ['LaTeX', 'Overleaf', 'AER Style', 'Tesis', 'BibTeX'],
    downloadSize: '1.4 MB',
    downloads: 3840,
    snippet: `\\documentclass[12pt]{article}
\\usepackage{amsmath, amssymb, amsthm}
\\usepackage{booktabs, graphicx, hyperref}
\\usepackage{natbib}

\\title{\\textbf{Título de la Investigación Económica}\\\\
\\large Un Enfoque Cuasi-Experimental con Microdatos}
\\author{Estudiante EcoLab\\\\ \\small Universidad de Investigación}
\\date{\\today}

\\begin{document}
\\maketitle
\\begin{abstract}
Resumen estructurado con pregunta de investigación, metodología econométrica, datos utilizados y principales resultados cuantitativos (máximo 150 palabras).
\\end{abstract}
\\end{document}`
  },
  {
    id: 'res-2',
    title: 'Pipeline Automatizado de Diferencias en Diferencias Escalonadas (Callaway & Sant’Anna)',
    type: 'Script de Código',
    language: 'R',
    author: 'Dra. Camila Benítez (EcoLab Fellow)',
    description: 'Código modular en R para estimar efectos de tratamiento promedio agregados por tiempo transcurrido (event studies), pruebas de pre-tendencias y generación de gráficos listos para publicación.',
    tags: ['R', 'did package', 'Event Study', 'Causal Inference', 'Microeconometría'],
    downloadSize: '45 KB',
    downloads: 2950,
    snippet: `# Paquetes requeridos
library(did)
library(tidyverse)
library(fixest)

# Estimación del modelo Callaway & Sant'Anna (2021)
did_model <- att_gt(
  yname = "salario_real",
  tname = "anio",
  idname = "id_individuo",
  gname = "primer_anio_tratamiento",
  data = dataset_panel,
  control_group = "nevertreated",
  anticipation = 0
)

# Agregación para Event Study
es_agg <- aggte(did_model, type = "dynamic")
ggdid(es_agg) + 
  theme_minimal() + 
  labs(title = "Efecto Dinámico del Tratamiento", y = "Efecto Estimado (ATT)")`
  },
  {
    id: 'res-3',
    title: 'Stata Do-File: Limpieza y Construcción de Variables Armonizadas para Encuestas de Hogares',
    type: 'Script de Código',
    language: 'Stata',
    author: 'MSc. Lucía Valenzuela',
    description: 'Script reproducible para depuración, detección de valores atípicos mediante winsorizing, cálculo de líneas de pobreza, deciles de ingreso per cápita e imputación de ingreso laboral.',
    tags: ['Stata', 'Microdatos', 'Encuestas de Hogares', 'Pobreza', 'Salarios'],
    downloadSize: '32 KB',
    downloads: 2190,
    snippet: `* ===============================================
* EcoLab Stata Toolkit: Limpieza de Encuestas
* ===============================================
clear all
set more off

* 1. Carga de microdatos anonimizados
use "$data_raw/enaho_modulo_ingresos.dta", clear

* 2. Tratamiento de valores faltantes y Winsorizing al 99%
winsor2 ingreso_laboral, cuts(1 99) suffix(_w)

* 3. Definición de variables sociodemográficas
gen byte ocupado = (cond_act == 1)
gen byte formal = (ocupado == 1 & afiliado_pension == 1)

* 4. Estimación de Brecha de Género con Efectos Fijos
reghdfe log_salario mujer edad educ_anios [pw=factor_ponderacion], absorb(depto anio)`
  },
  {
    id: 'res-4',
    title: 'Guía Metodológica: Estándares de Ciencia Abierta y Reproducibilidad en Economía',
    type: 'Guía Metodológica',
    language: 'Markdown',
    author: 'Dirección de Investigación EcoLab',
    description: 'Manual de buenas prácticas adoptado por los editores de la American Economic Association (AEA Data Editor): estructura de carpetas, seed setting, archivos README reproducibles y Docker para economía.',
    tags: ['Reproducibilidad', 'AEA Standards', 'Data Ethics', 'Open Science'],
    downloadSize: '820 KB',
    downloads: 1670,
    snippet: `# Protocolo de Reproducibilidad EcoLab

1. **Estructura de Carpetas Estándar:**
   - \`/1_data_raw\`: Microdatos inalterados originales con checksum MD5.
   - \`/2_data_clean\`: Datos procesados generados exclusivamente por scripts.
   - \`/3_scripts\`: Código ordenado secuencialmente (\`01_cleaning\`, \`02_estimation\`, \`03_figures\`).
   - \`/4_outputs\`: Tablas y gráficos finales.

2. **Reglas de Oro:**
   - Jamás modificar archivos de datos crudos manualmente en Excel.
   - Fijar siempre la semilla aleatoria: \`set.seed(2026)\` en R o \`set seed 2026\` en Stata.
   - Todos los scripts deben ejecutarse de principio a fin sin intervención manual.`
  }
];

export const LAB_STATS = {
  activeStudents: 1450,
  publishedPapers: 48,
  openDatasets: 120,
  partnerUniversities: 28,
  mentorshipHours: 3200,
  phdPlacements: 34
};
