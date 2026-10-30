export interface JobEntry {
  title: string;
  text: string;
  tags: string[];
}

export interface DegreeEntry {
  years: string;
  title: string;
  institution: string;
  /** frase curta abaixo da instituição */
  detail?: string;
  tags?: string[];
}

export interface LanguageEntry {
  name: string;
  level: string;
}

// Unidades usadas para escrever a duração de cada cargo ("3 anos e 8 meses")
export interface DurationUnits {
  year: string;
  years: string;
  month: string;
  months: string;
  joiner: string;
}

// Toda chave é obrigatória: um idioma sem tradução não compila
export interface Translation {
  nav: { experience: string; education: string; languages: string };
  hello: string;
  role: string;
  /** aceita <mark> para o destaque */
  catchphrase: string;
  summary: string;
  photoAlt: string;
  stackLabel: string;
  experienceTitle: string;
  experienceLocation: string;
  current: string;
  months: string[];
  duration: DurationUnits;
  /** na mesma ordem de JOB_PERIODS em experience.component.ts */
  jobs: JobEntry[];
  educationTitle: string;
  degrees: DegreeEntry[];
  languagesTitle: string;
  languages: LanguageEntry[];
}
