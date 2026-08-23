import { Course, MentorDocente, Project, EconomicDataset, ResourceItem, PillarDetail } from '../types';

export const PILLARS_DATA: PillarDetail[] = [
  {
    id: 'formacion',
    title: 'Formación',
    iconName: 'school',
    subtitle: 'Semilleros técnicos y rigor metodológico',
    description: 'Capacitación intensiva en econometría aplicada, programación científica (R, Python, Stata, Julia) y modelado causal para estudiantes de pregrado y posgrado.',
    steps: [
      'Bootcamps prácticos en manejo de microdatos y web scraping económico.',
      'Talleres avanzados en inferencia causal (Diff-in-Diff, RDD, Variables Instrumentales).',
      'Talleres de reproducibilidad y control de versiones con Git/GitHub para economistas.'
    ],
    tools: ['R / Tidyverse', 'Python / Statsmodels', 'Stata SE', 'LaTeX / Overleaf'],
    metrics: '+850 estudiantes capacitados en los últimos 4 semestres',
    color: '#ffc300'
  },
  {
    id: 'mentoria',
    title: 'Mentoría',
    iconName: 'psychology',
    subtitle: 'Acompañamiento personalizado 1 a 1',
    description: 'Conectamos a jóvenes investigadores con profesores titulares, doctores y economistas líderes en organismos multilaterales, bancos centrales y academia.',
    steps: [
      'Diagnóstico y delimitación precisa de la pregunta de investigación.',
      'Revisión periódica de avances econométricos y especificación de modelos.',
      'Orientación para postulaciones a becas doctorales y centros de investigación globales.'
    ],
    tools: ['Google Scholar', 'Zotero', 'Mendeley', 'Slack Colaborativo'],
    metrics: '94% de efectividad en culminación exitosa de tesis de grado',
    color: '#e0eaff'
  },
  {
    id: 'investigacion',
    title: 'Investigación',
    iconName: 'search',
    subtitle: 'Evidencia rigurosa con impacto público',
    description: 'Desarrollo de proyectos orientados a responder interrogantes clave sobre desigualdad, política monetaria, transición energética, informalidad laboral y desarrollo productivo.',
    steps: [
      'Diseño experimental y cuasi-experimental estricto.',
      'Análisis de sensibilidad y pruebas de robustez empírica.',
      'Elaboración de Working Papers y Policy Briefs para tomadores de decisiones.'
    ],
    tools: ['Causal Inference Tools', 'Synthetic Controls', 'Spatial Econometrics'],
    metrics: '48 papers presentados en conferencias internacionales indexadas',
    color: '#ffc300'
  },
  {
    id: 'datos',
    title: 'Datos',
    iconName: 'database',
    subtitle: 'Infraestructura de datos abiertos y curados',
    description: 'Acceso centralizado a bases de datos microeconómicas, censos, encuestas de hogares estandarizadas y series de tiempo macroeconómicas listas para estimación.',
    steps: [
      'Curaduría y homologación de encuestas de hogares en América Latina.',
      'API pública para descarga directa de microdatos en R, Python y Stata.',
      'Diccionarios de variables interactivos con documentación metodológica.'
    ],
    tools: ['PostgreSQL', 'DuckDB', 'Arrow / Parquet', 'FRED & World Bank APIs'],
    metrics: '+120 datasets abiertos y actualizados mensualmente',
    color: '#e0eaff'
  },
  {
    id: 'resultados',
    title: 'Resultados',
    iconName: 'insights',
    subtitle: 'De la teoría académica a la política real',
    description: 'Traducción de hallazgos cuantitativos en publicaciones en revistas indexadas (Q1/Q2), recomendaciones de política pública e inserción laboral de alto perfil.',
    steps: [
      'Publicación de Working Papers y policy notes ejecutivos.',
      'Mesas de diálogo con ministerios de hacienda, bancos centrales y ONGs.',
      'Colocación de graduados en programas PhD (Harvard, LSE, MIT, UC Berkeley, Carlos III).'
    ],
    tools: ['Journal Submissions', 'Policy Briefs', 'Academic Roadshows'],
    metrics: '18 publicaciones Q1/Q2 en Scopus / Web of Science en 2024-2025',
    color: '#ffc300'
  }
];

export const COURSES_DATA: Course[] = [
  {
    id: 'curso-1',
    title: 'Microeconometría Aplicada e Inferencia Causal Moderna',
    level: 'Intermedio',
    track: 'Políticas Públicas & Causalidad',
    duration: '8 Semanas',
    hours: 48,
    instructor: 'Dra. Camila Benítez',
    instructorRole: 'PhD en Economía (UC Berkeley) - Investigadora Principal',
    instructorAffiliation: 'Laboratorio EcoLab & Visiting Scholar',
    description: 'Aprende los métodos causales más demandados en la investigación moderna: Variables Instrumentales, Diferencias en Diferencias escalonadas (Callaway & Sant’Anna), Regresión Discontinua y Controles Sintéticos en R y Stata.',
    tools: ['R', 'Stata', 'fixest', 'ggplot2'],
    syllabus: [
      { week: 1, topic: 'El Marco de Resultados Potenciales de Rubin y Sesgo de Selección', practicalWork: 'Estimación de ATE y ATT con datos simulados en R' },
      { week: 2, topic: 'Regresión Lineal y Matching por Puntaje de Propensión (PSM)', practicalWork: 'Evaluación del programa de capacitación laboral NSW' },
      { week: 3, topic: 'Variables Instrumentales y LATE (Efecto Local de Tratamiento)', practicalWork: 'Retornos a la educación usando trimestre de nacimiento' },
      { week: 4, topic: 'Diferencias en Diferencias (DiD) Tradicional vs Moderno', practicalWork: 'Impacto del salario mínimo con el diseño Card & Krueger' },
      { week: 5, topic: 'DiD con Tratamiento Escalonado y Heterogeneidad Temporal', practicalWork: 'Implementación de estimadores de Callaway & Sant’Anna' },
      { week: 6, topic: 'Diseño de Regresión Discontinua (RDD Nítida y Difusa)', practicalWork: 'Evaluación de becas universitarias con punto de corte' },
      { week: 7, topic: 'Control Sintético y Matrices Interactivas', practicalWork: 'Efecto de la Proposición 99 en consumo de tabaco' },
      { week: 8, topic: 'Presentación de Proyectos Empíricos Finales y Peer-Review', practicalWork: 'Defensa de réplica econométrica' }
    ],
    enrolledCount: 142,
    startDate: '15 de Abril, 2026',
    schedule: 'Martes y Jueves, 18:00 - 20:30 (GMT-5)',
    modality: 'Online en vivo',
    featured: true
  },
  {
    id: 'curso-2',
    title: 'Ciencia de Datos Económicos & Machine Learning con Python',
    level: 'Iniciación',
    track: 'Econometría & Datos',
    duration: '6 Semanas',
    hours: 36,
    instructor: 'Dr. Santiago Arrieta',
    instructorRole: 'PhD en Economía Cuantitativa (UPF Barcelona)',
    instructorAffiliation: 'Consultor Banco Interamericano de Desarrollo',
    description: 'Puente directo entre la econometría clásica y el machine learning predictivo. Domina manipulación de macrodatos con Polars/Pandas, Regularización (LASSO/Ridge), Bosques Aleatorios y Double Machine Learning.',
    tools: ['Python', 'Pandas', 'Scikit-Learn', 'DoubleML', 'Seaborn'],
    syllabus: [
      { week: 1, topic: 'Ecosistema de Computación Científica en Python para Economistas', practicalWork: 'Limpieza y estructuración de 5 millones de registros de nómina' },
      { week: 2, topic: 'Modelos de Regularización: LASSO, Ridge y ElasticNet', practicalWork: 'Selección de variables en predicción de morosidad bancaria' },
      { week: 3, topic: 'Árboles de Decisión y Random Forests para Heterogeneidad', practicalWork: 'Causal Forests para targeting de subsidios energéticos' },
      { week: 4, topic: 'Double / Debiased Machine Learning (DML) para Parámetros Estructurales', practicalWork: 'Estimación de elasticidad precio de la demanda con DML' },
      { week: 5, topic: 'Procesamiento de Lenguaje Natural (NLP) en Reportes Financieros', practicalWork: 'Construcción de un índice de incertidumbre de política económica' },
      { week: 6, topic: 'Despliegue de Dashboards Interactivos con Streamlit & APIs', practicalWork: 'Publicación de visor macroeconómico interactivo' }
    ],
    enrolledCount: 188,
    startDate: '2 de Mayo, 2026',
    schedule: 'Sábados, 09:00 - 13:00 (GMT-5)',
    modality: 'Híbrido',
    featured: true
  },
  {
    id: 'curso-3',
    title: 'Modelos Macroeconómicos DSGE & Series de Tiempo Avanzadas',
    level: 'Avanzado',
    track: 'Macroeconomía Cuantitativa',
    duration: '10 Semanas',
    hours: 60,
    instructor: 'Dr. Mateo Albarracín',
    instructorRole: 'Ex-Economista Senior Banco Central & Profesor Titular',
    instructorAffiliation: 'Universidad de Chile & EcoLab Senior Fellow',
    description: 'Especialización en modelización macroeconómica dinámica estocástica de equilibrio general (DSGE), funciones de impulso-respuesta en VAR Estructurales y Proyecciones Locales de Jordà en Julia y Dynare.',
    tools: ['Dynare / Matlab', 'Julia', 'VAR Models', 'Local Projections'],
    syllabus: [
      { week: 1, topic: 'Fundamentos del Modelo Neoclásico Estocástico de Crecimiento', practicalWork: 'Resolución de Euler en estado estacionario' },
      { week: 2, topic: 'Modelo Nuevo Keynesiano Básico con Fricciones de Precios (Calvo)', practicalWork: 'Codificación en Dynare de la regla de Taylor' },
      { week: 3, topic: 'Economía Abierta: Choques Externos y Términos de Intercambio', practicalWork: 'Simulación de choque petrolero en economía emergente' },
      { week: 4, topic: 'Estimación Bayesiana de Parámetros Estructurales', practicalWork: 'Algoritmo Metropolis-Hastings con datos trimestrales de PIB' },
      { week: 5, topic: 'Identificación de Choques Monetarios con SVAR y Sign Restrictions', practicalWork: 'Réplica de Romer & Romer (2004)' },
      { week: 6, topic: 'Proyecciones Locales de Jordà con Variación Exógena', practicalWork: 'Multiplicadores fiscales en periodos de recesión' }
    ],
    enrolledCount: 95,
    startDate: '20 de Mayo, 2026',
    schedule: 'Lunes y Miércoles, 19:00 - 21:30 (GMT-5)',
    modality: 'Online en vivo'
  },
  {
    id: 'curso-4',
    title: 'Economía Conductual & Diseño de Experimentos de Campo (RCTs)',
    level: 'Intermedio',
    track: 'Economía Conductual',
    duration: '6 Semanas',
    hours: 36,
    instructor: 'Prof. Dra. Elena Morales',
    instructorRole: 'Directora del Instituto de Economía Experimental',
    instructorAffiliation: 'Universidad Nacional & EcoLab Co-founder',
    description: 'Metodología para diseñar, pilotear y analizar ensayos de control aleatorizados (RCTs) en temas de ahorro, pago de impuestos, cumplimiento normativo y sesgos cognitivos.',
    tools: ['Qualtrics', 'oTree', 'R', 'Power Analysis'],
    syllabus: [
      { week: 1, topic: 'Heurísticas, Sesgos y la Arquitectura de Decisión (Nudges)', practicalWork: 'Auditoría conductual de un trámite gubernamental' },
      { week: 2, topic: 'Cálculo de Potencia Estadística y Tamaño Muestral Óptimo', practicalWork: 'Power calculations con clusters en software Optimal Design' },
      { week: 3, topic: 'Diseño de Cuestionarios y Pre-Registration en OSF / AEA RCT Registry', practicalWork: 'Redacción de un Plan de Análisis Previo (PAP)' },
      { week: 4, topic: 'Manejo de Atrición, Falta de Cumplimiento e Intention-To-Treat', practicalWork: 'Corrección por múltiples hipótesis probadas (Bonferroni / FDR)' }
    ],
    enrolledCount: 110,
    startDate: '8 de Junio, 2026',
    schedule: 'Viernes, 16:00 - 20:00 (GMT-5)',
    modality: 'Presencial'
  }
];

export const MENTORS_DATA: MentorDocente[] = [
  {
    id: 'mentor-1',
    name: 'Prof. Dra. Elena Morales',
    role: 'Docente Investigador',
    title: 'Directora Académica EcoLab',
    department: 'Departamento de Economía Cuantitativa',
    university: 'Universidad de los Andes & Visiting Prof. Stanford',
    country: 'Colombia / EE.UU.',
    bio: 'Especialista en economía experimental y evaluación de impacto en educación y programas de género. Ha liderado más de 14 ensayos controlados aleatorizados en América Latina con financiamiento del J-PAL y BID.',
    specialties: ['Economía del Comportamiento', 'Evaluación de Impacto (RCTs)', 'Economía de Género', 'Microeconometría'],
    recentPublications: [
      { title: 'Nudging Academic Persistence: A Scalable Field Experiment in Public Universities', journal: 'Journal of Development Economics', year: 2024 },
      { title: 'Information Asymmetries and Female Labor Participation in Andean Megacities', journal: 'American Economic Journal: Applied Economics', year: 2023 }
    ],
    email: 'elena.morales@ecolab-research.org',
    scholarUrl: 'https://scholar.google.com',
    orcid: '0000-0002-4821-9921',
    availableHours: 'Jueves 14:00 - 18:00 (4 cupos)',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    acceptingMentees: true
  },
  {
    id: 'mentor-2',
    name: 'Dr. Mateo Albarracín',
    role: 'Docente Investigador',
    title: 'Cátedra de Macroeconomía y Finanzas',
    department: 'Instituto de Economía y Políticas Financieras',
    university: 'Universidad de Chile & PhD Toulouse School of Economics',
    country: 'Chile',
    bio: 'Investigador enfocado en política monetaria no convencional, choques en precios de commodities y transmisión de política en economías dolarizadas o bimonetarias.',
    specialties: ['Macroeconomía Cuantitativa', 'Modelos DSGE', 'Series de Tiempo', 'Política Monetaria'],
    recentPublications: [
      { title: 'Commodity Windfalls, Exchange Rate Anchors, and Sovereign Risk Spreads', journal: 'Journal of International Economics', year: 2024 },
      { title: 'Monetary Policy Rules in Small Open Resource-Rich Economies', journal: 'Review of Economic Dynamics', year: 2023 }
    ],
    email: 'mateo.albarracin@ecolab-research.org',
    scholarUrl: 'https://scholar.google.com',
    orcid: '0000-0001-9032-1144',
    availableHours: 'Viernes 10:00 - 13:00 (2 cupos)',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    acceptingMentees: true
  },
  {
    id: 'mentor-3',
    name: 'Dra. Camila Benítez',
    role: 'Mentor Senior',
    title: 'Lead Causal Inference Fellow',
    department: 'Laboratorio de Microeconomía y Políticas Públicas',
    university: 'Universidad Carlos III de Madrid / Postdoc UC Berkeley',
    country: 'España / México',
    bio: 'Pionera en la aplicación de estimadores robustos de Diferencias en Diferencias y econometría espacial para evaluar transferencias sociales y formalización empresarial.',
    specialties: ['Inferencia Causal', 'Econometría Espacial', 'Economía Laboral', 'Staggered DiD'],
    recentPublications: [
      { title: 'Heterogeneous Effects in Staggered Social Transfers: Evidence from National Panels', journal: 'Journal of Applied Econometrics', year: 2024 },
      { title: 'Spatial Spillovers of Minimum Wage Increases on Informal Markets', journal: 'Labour Economics', year: 2023 }
    ],
    email: 'camila.benitez@ecolab-research.org',
    scholarUrl: 'https://scholar.google.com',
    orcid: '0000-0003-7721-0098',
    availableHours: 'Miércoles 16:00 - 19:00 (3 cupos)',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    acceptingMentees: true
  },
  {
    id: 'mentor-4',
    name: 'Dr. Santiago Arrieta',
    role: 'Mentor Senior',
    title: 'Director de Analítica y Big Data Económico',
    department: 'Centro de Datos de Alta Frecuencia',
    university: 'Universidad Torcuato Di Tella & PhD Pompeu Fabra',
    country: 'Argentina',
    bio: 'Experto en el cruce de Machine Learning con identificación causal y procesamiento de billones de transacciones financieras y datos satelitales para estimación del PIB en tiempo real (nowcasting).',
    specialties: ['Machine Learning Económico', 'Nowcasting del PIB', 'Big Data', 'Double ML'],
    recentPublications: [
      { title: 'High-Frequency Satellite Nightlight and Payment Data for Flash GDP Nowcasting', journal: 'International Journal of Forecasting', year: 2024 },
      { title: 'Targeting Credit Insecurity via Double Machine Learning on Administrative Tax Records', journal: 'Journal of Financial Econometrics', year: 2023 }
    ],
    email: 'santiago.arrieta@ecolab-research.org',
    scholarUrl: 'https://scholar.google.com',
    orcid: '0000-0002-1209-6632',
    availableHours: 'Martes 09:00 - 12:00 (3 cupos)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    acceptingMentees: true
  },
  {
    id: 'mentor-5',
    name: 'MSc. Lucía Valenzuela',
    role: 'Asistente de Investigación',
    title: 'Coordinadora de Semilleros EcoLab',
    department: 'Semillero de Econometría y Microdatos',
    university: 'Pontificia Universidad Católica del Perú (PUCP)',
    country: 'Perú',
    bio: 'Economista investigadora especializada en análisis de encuestas de hogares (ENAHO, CASEN, EPH) y tutoría de tesis en microeconomía aplicada.',
    specialties: ['Microdatos ENAHO/CASEN', 'Programación en R & Stata', 'Economía de la Pobreza'],
    recentPublications: [
      { title: 'Youth NEET Rates and Conditional Cash Transfers in Urban Peripheries', journal: 'Revista de Economía Institucional', year: 2024 }
    ],
    email: 'lucia.valenzuela@ecolab-research.org',
    scholarUrl: 'https://scholar.google.com',
    orcid: '0000-0001-5544-2211',
    availableHours: 'Lunes a Viernes 15:00 - 17:00',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    acceptingMentees: true
  },
  {
    id: 'mentor-6',
    name: 'Dr. Gabriel Restrepo',
    role: 'Docente Investigador',
    title: 'Profesor de Economía Ambiental y Recursos',
    department: 'Centro de Transición Energética y Sostenibilidad',
    university: 'UNAM México & PhD Oxford University',
    country: 'México',
    bio: 'Líder en estudios sobre impuestos al carbono, valoración contingente del agua y efectos distributivos de la transición energética en países en desarrollo.',
    specialties: ['Economía Ambiental', 'Impuestos al Carbono', 'Modelos CGE', 'Econometría Espacial'],
    recentPublications: [
      { title: 'Distributional Impacts of Fossil Fuel Subsidy Reforms across Deciles', journal: 'Energy Economics', year: 2024 }
    ],
    email: 'gabriel.restrepo@ecolab-research.org',
    scholarUrl: 'https://scholar.google.com',
    orcid: '0000-0002-3341-9876',
    availableHours: 'Jueves 09:00 - 12:00 (1 cupo)',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400',
    acceptingMentees: false
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-1',
    title: 'Impacto de la Automatización y la Inteligencia Artificial en la Desigualdad Salarial en América Latina',
    authors: [
      { name: 'Dr. Santiago Arrieta', institution: 'EcoLab / UTDT' },
      { name: 'Dra. Camila Benítez', institution: 'EcoLab / UC3M' },
      { name: 'MSc. Daniel Osorio', institution: 'Universidad de Chile' }
    ],
    abstract: 'Evaluamos la exposición a la IA y tareas rutinarias en 18 millones de registros administrativos de empleo formal e informal entre 2018 y 2025. Implementando un estimador de diferencias en diferencias con emparejamiento por entropía, encontramos que profesiones con alta intensidad analítica experimentaron un incremento del 8.4% en salarios relativos, mientras que los roles administrativos rutinarios sufrieron una contracción del 12.1% en puestos de entrada.',
    year: 2025,
    category: 'Economía Laboral',
    status: 'Publicado',
    journal: 'Journal of Development Economics (Vol. 162)',
    jelCodes: ['J24 (Capital Humano)', 'J31 (Estructura Salarial)', 'O33 (Cambio Tecnológico)'],
    datasetUsed: 'Panel Integrado de Seguridad Social y Encuestas de Hogares Homologadas EcoLab (2018-2025)',
    methodology: 'Diferencias en Diferencias Generalizadas con Exposición a Tareas Automatizables (Aghion et al. metric)',
    keyFindings: [
      'Aumento del 8.4% en salarios de puestos con complementariedad a la IA.',
      'Aceleración de la polarización laboral en ciudades medianas.',
      'Brecha de género exacerbada en tareas administrativas sin formación STEM.'
    ],
    downloadsCount: 1420,
    citations: 27,
    chartData: [
      { period: '2019', baseline: 100, treatment: 100, confidenceLow: 98, confidenceHigh: 102 },
      { period: '2020', baseline: 96, treatment: 95, confidenceLow: 93, confidenceHigh: 97 },
      { period: '2021', baseline: 102, treatment: 104, confidenceLow: 101, confidenceHigh: 107 },
      { period: '2022', baseline: 104, treatment: 109, confidenceLow: 106, confidenceHigh: 112 },
      { period: '2023', baseline: 106, treatment: 114, confidenceLow: 111, confidenceHigh: 117 },
      { period: '2024', baseline: 107, treatment: 119, confidenceLow: 115, confidenceHigh: 123 },
      { period: '2025', baseline: 108, treatment: 122, confidenceLow: 118, confidenceHigh: 126 }
    ]
  },
  {
    id: 'proj-2',
    title: 'Efectividad de los Recordatorios Conductuales (Nudges) en el Pago Oportuno del Impuesto Predial',
    authors: [
      { name: 'Prof. Dra. Elena Morales', institution: 'EcoLab / UniAndes' },
      { name: 'MSc. Lucía Valenzuela', institution: 'PUCP' }
    ],
    abstract: 'Diseño y ejecución de un ensayo de control aleatorizado (RCT) con 64,000 contribuyentes urbanos. Evaluamos 4 variantes de mensajes: norma social, simplificación visual, costo de oportunidad y amenaza de sanción. Los recordatorios basados en reciprocidad comunitaria aumentaron el cumplimiento voluntario en 5.8 puntos porcentuales sin generar costos punitivos.',
    year: 2024,
    category: 'Economía Conductual',
    status: 'Publicado',
    journal: 'American Economic Journal: Economic Policy (Forthcoming)',
    jelCodes: ['H26 (Cumplimiento Tributario)', 'D91 (Economía del Comportamiento)', 'C93 (Experimentos de Campo)'],
    datasetUsed: 'Registro Catastral Municipal y Base Anonimizada de Recaudación Tributaria',
    methodology: 'Ensayo Controlado Aleatorizado (RCT) Estratificado por Nivel de Ingresos',
    keyFindings: [
      'Incremento de 5.8 p.p. en pago voluntario mediante normas sociales locales.',
      'Costo-beneficio de $1 invertido en mensajería por cada $34 recaudados.',
      'Persistencia del hábito de pago a 12 meses vista.'
    ],
    downloadsCount: 980,
    citations: 19,
    chartData: [
      { period: 'Mes 1', baseline: 42, treatment: 48, confidenceLow: 46, confidenceHigh: 50 },
      { period: 'Mes 2', baseline: 51, treatment: 62, confidenceLow: 60, confidenceHigh: 64 },
      { period: 'Mes 3', baseline: 58, treatment: 71, confidenceLow: 69, confidenceHigh: 73 },
      { period: 'Mes 6', baseline: 64, treatment: 77, confidenceLow: 75, confidenceHigh: 79 },
      { period: 'Mes 12', baseline: 68, treatment: 81, confidenceLow: 79, confidenceHigh: 83 }
    ]
  },
  {
    id: 'proj-3',
    title: 'Transmisión de Choques Monetarios Globales y Riesgo Soberano en Economías con Dolarización Parcial',
    authors: [
      { name: 'Dr. Mateo Albarracín', institution: 'EcoLab / U. de Chile' },
      { name: 'Dr. Fernando Vaca', institution: 'Banco Central' }
    ],
    abstract: 'Estimamos un modelo DSGE no lineal con canal de hoja de balance bancaria y fricciones financieras. Calibramos el modelo para economías de la región andina y mostramos que subidas imprevistas de la tasa de la Reserva Federal (Fed Funds) generan un efecto contractivo 2.3 veces superior cuando la deuda corporativa en moneda extranjera supera el 35% del activo total.',
    year: 2025,
    category: 'Macroeconomía',
    status: 'Working Paper',
    journal: 'EcoLab Working Paper Series No. 2025-04',
    jelCodes: ['E44 (Mercados Financieros y Macro)', 'E52 (Política Monetaria)', 'F34 (Deuda Externa)'],
    datasetUsed: 'Panel Trimestral de Balances Bancarios y Spreads EMBI+ (2000-2024)',
    methodology: 'DSGE Bayesiano con Fricciones Financieras de Bernanke-Gertler-Gilchrist',
    keyFindings: [
      'Canal de hoja de balance amplifica la depreciación cambiaria.',
      'La intervención esterilizada en el mercado cambiario mitiga un 40% de la volatilidad del PIB.',
      'Recomendación de encajes bancarios macroprudenciales diferenciados por moneda.'
    ],
    downloadsCount: 650,
    citations: 8,
    chartData: [
      { period: 't=0 (Choque)', baseline: 0, treatment: -0.4, confidenceLow: -0.6, confidenceHigh: -0.2 },
      { period: 't=2 trim', baseline: 0, treatment: -1.8, confidenceLow: -2.1, confidenceHigh: -1.5 },
      { period: 't=4 trim', baseline: 0, treatment: -2.3, confidenceLow: -2.7, confidenceHigh: -1.9 },
      { period: 't=8 trim', baseline: 0, treatment: -1.1, confidenceLow: -1.4, confidenceHigh: -0.8 },
      { period: 't=12 trim', baseline: 0, treatment: -0.2, confidenceLow: -0.4, confidenceHigh: 0.1 }
    ]
  },
  {
    id: 'proj-4',
    title: 'Efectos Distributivos de los Subsidios al Transporte Público Eléctrico: Análisis de Bienestar Espacial',
    authors: [
      { name: 'Dr. Gabriel Restrepo', institution: 'EcoLab / UNAM' },
      { name: 'Lic. Sofia Méndez', institution: 'EcoLab Junior Fellow' }
    ],
    abstract: 'Analizamos la expansión de corredores de transporte masivo cero emisiones con modelos de equilibrio general espacial (Ahlfeldt et al.). Evaluamos ganancias de accesibilidad a empleo formal para los deciles 1 a 4 y la mitigación de emisiones de CO2 per cápita.',
    year: 2024,
    category: 'Economía Ambiental',
    status: 'En Desarrollo',
    journal: 'Pre-print en Revisión en Journal of Urban Economics',
    jelCodes: ['Q54 (Cambio Climático)', 'R41 (Transporte Urbano)', 'H23 (Externalidades)'],
    datasetUsed: 'Datos Abiertos de Movilidad GPS, Matriz Origen-Destino y Censo de Población',
    methodology: 'Modelo de Equilibrio General Espacial Cuantitativo con Externalidades de Congestión',
    keyFindings: [
      'Reducción de 32 minutos diarios en traslados para hogares de bajos ingresos.',
      'Plusvalía capturada por precios de vivienda no superó el 4.2%, evitando gentrificación severa.',
      'Ahorro neto anual de 145,000 toneladas de CO2 equivalente.'
    ],
    downloadsCount: 410,
    citations: 4
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
