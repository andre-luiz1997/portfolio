// Ordem de exibição dos cards de educação (o EducationComponent itera esta lista)
export const EDUCATION_KEYS = ['knn', 'cefet_mg', 'iut1', 'iniciacao_cientifica', 'ipc', 'ccaa'] as const;
export type EducationKey = typeof EDUCATION_KEYS[number];

export const PROJECT_KEYS = ['appfintech', 'america', 'campanhas', 'ntwdigital', 'tutore'] as const;
export type ProjectKey = typeof PROJECT_KEYS[number];

export interface EducationEntry {
  start: number;
  end?: number;
  location: string;
  course: string;
  institution: string;
  description?: string;
}

export interface ProjectEntry {
  title: string;
  subtitle: string;
  description: string;
  url?: string;
}

// Toda chave é obrigatória: um idioma sem tradução não compila
export interface Translation {
  about_me: string;
  about_me_p1: string;
  about_me_p2: string;
  about_me_p3: string;
  angularjs: string;
  codeigniter: string;
  css3: string;
  education: string;
  education_dsc: Record<EducationKey, EducationEntry>;
  experience: string;
  experiences: string;
  express: string;
  html5: string;
  ionic: string;
  javascript: string;
  laravel: string;
  mysql: string;
  mongodb: string;
  nodejs: string;
  ongoing: string;
  php: string;
  portfolio: string;
  profileName: string;
  profilePosition: string;
  project: string;
  projects: string;
  project_dsc: Record<ProjectKey, ProjectEntry>;
  skills: string;
  typescript: string;
  wordpress: string;
  year: string;
  years: string;
}
