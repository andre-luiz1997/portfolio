import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { enUS } from '../i18n/en-US';
import { frFR } from '../i18n/fr-FR';
import { ptBR } from '../i18n/pt-BR';
import { Translation } from '../i18n/translation.model';

export interface LanguageOption {
  lang: string;
  label: string;
}

const STORAGE_KEY = 'default_lang';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  languageChange: Subject<string> = new Subject<string>();

  private language: LanguageOption[] = [
    { lang: 'pt-BR', label: 'PT' },
    { lang: 'en-US', label: 'EN' },
    { lang: 'fr-FR', label: 'FR' }
  ];

  private translation: Record<string, Translation> = {
    'pt-BR': ptBR,
    'en-US': enUS,
    'fr-FR': frFR
  };

  private lang: string;

  constructor(@Inject(DOCUMENT) private document: Document) {
    const saved = this.readStoredLang();
    this.lang = saved && this.translation[saved] ? saved : 'pt-BR';
    this.document.documentElement.lang = this.lang;
  }

  getTranslation(): Translation {
    return this.translation[this.lang];
  }

  getAvailableLanguages(): LanguageOption[] {
    return this.language;
  }

  setLang(lang: string): Translation {
    if (!this.translation[lang]) {
      return this.getTranslation();
    }
    this.lang = lang;
    this.document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // sem localStorage (modo privado): o idioma vale só para esta visita
    }
    this.languageChange.next(lang);
    return this.getTranslation();
  }

  getLang(): string {
    return this.lang;
  }

  /** "2026-10-30" → "30 de outubro de 2026" no idioma atual */
  formatDate(isoDate: string): string {
    // meio-dia evita que o fuso desloque a data para o dia anterior
    const date = new Date(`${isoDate}T12:00:00`);
    return new Intl.DateTimeFormat(this.lang, { day: 'numeric', month: 'long', year: 'numeric' }).format(date);
  }

  private readStoredLang(): string | null {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch {
      return null;
    }
  }
}
