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
    title: 'Microeconometría Aplicada',
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
      { name: 'Calcina Mamani Fabiola Belén', institution: 'Universidad Mayor de San Andrés (UMSA)-Economía-Programa EcoLab' },
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
