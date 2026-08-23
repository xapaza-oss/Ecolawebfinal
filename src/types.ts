export type NavSection = 'inicio' | 'formacion' | 'mentores' | 'docentes' | 'proyectos' | 'data' | 'recursos';

export interface Course {
  id: string;
  title: string;
  level: 'Iniciación' | 'Intermedio' | 'Avanzado';
  track: 'Econometría & Datos' | 'Macroeconomía Cuantitativa' | 'Políticas Públicas & Causalidad' | 'Economía Conductual';
  duration: string;
  hours: number;
  instructor: string;
  instructorRole: string;
  instructorAffiliation: string;
  description: string;
  tools: string[];
  syllabus: { week: number; topic: string; practicalWork: string }[];
  enrolledCount: number;
  startDate: string;
  schedule: string;
  modality: 'Híbrido' | 'Online en vivo' | 'Presencial';
  featured?: boolean;
}

export interface MentorDocente {
  id: string;
  name: string;
  role: 'Docente Investigador' | 'Mentor Senior' | 'Asistente de Investigación';
  title: string;
  department: string;
  university: string;
  country: string;
  bio: string;
  specialties: string[];
  recentPublications: { title: string; journal: string; year: number }[];
  email: string;
  scholarUrl?: string;
  orcid?: string;
  availableHours: string;
  avatar: string;
  acceptingMentees: boolean;
}

export interface Project {
  id: string;
  title: string;
  authors: { name: string; institution: string }[];
  abstract: string;
  year: number;
  category: 'Macroeconomía' | 'Microeconometría' | 'Economía Laboral' | 'Economía Ambiental' | 'Economía Conductual' | 'Finanzas' | 'Desarrollo';
  status: 'Publicado' | 'Working Paper' | 'En Desarrollo';
  journal?: string;
  jelCodes: string[];
  datasetUsed: string;
  methodology: string;
  keyFindings: string[];
  downloadsCount: number;
  citations: number;
  chartData?: { period: string; baseline: number; treatment: number; confidenceLow?: number; confidenceHigh?: number }[];
}

export interface EconomicDataPoint {
  date: string;
  gdpGrowth: number;
  inflation: number;
  unemployment: number;
  interestRate: number;
  tradeBalance: number;
  giniIndex: number;
}

export interface EconomicDataset {
  id: string;
  title: string;
  code: string;
  category: 'Macroeconómico' | 'Laboral & Salarios' | 'Precios & Moneda' | 'Comercio Exterior' | 'Desigualdad & Pobreza';
  frequency: 'Mensual' | 'Trimestral' | 'Anual';
  source: string;
  timeCoverage: string;
  description: string;
  indicators: string[];
  data: EconomicDataPoint[];
  lastUpdated: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  type: 'Script de Código' | 'Plantilla Académica' | 'Guía Metodológica' | 'Diccionario de Datos';
  language: 'R' | 'Python' | 'Stata' | 'LaTeX' | 'Markdown';
  author: string;
  description: string;
  tags: string[];
  snippet?: string;
  downloadSize: string;
  downloads: number;
}

export interface PillarDetail {
  id: string;
  title: string;
  iconName: string;
  subtitle: string;
  description: string;
  steps: string[];
  tools: string[];
  metrics: string;
  color: string;
}
