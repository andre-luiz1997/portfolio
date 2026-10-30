import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { enUS } from '../i18n/en-US';
import { frFR } from '../i18n/fr-FR';
import { ptBR } from '../i18n/pt-BR';
import { Translation } from '../i18n/translation.model';

@Injectable({
  providedIn: 'root'
})
export class LangService {
  languageChange: Subject<string> = new Subject<string>();
  private lang: string | any = localStorage.getItem('default_lang') ? localStorage.getItem('default_lang') : 'pt-BR';

  private language = [
    {
      lang: 'pt-BR',
      icon: 'flagBr'
    },
    {
      lang: 'en-US',
      icon: 'flagUs'
    },{
      lang: 'fr-FR',
      icon: 'flagFr'
    }
  ];

  private translation: Record<string, Translation> = {
    'pt-BR': ptBR,
    'en-US': enUS,
    'fr-FR': frFR
  };

  projects = [
    {
      key: 'tutore',
      list: [
        'codeigniter','mysql'
      ],
      url: null,
    },{
      key: 'campanhas',
      list: [
        'laravel','mysql'
      ]
    },{
      key: 'america',
      list: [
        'codeigniter','mysql','wordpress'
      ],
      url: 'https://americavistos.com.br/'
    },{
      key: 'ntwdigital',
      list: [
        'codeigniter','mysql','wordpress'
      ],
      url: 'https://ntwdigital.com.br/'
    },{
      key: 'appfintech',
      list: [
        'angularjs','nodejs','css3','express'
      ]
    }    
  ];

  skills = [
    {
      key: 'javascript',
      icon: 'simpleJavascript',
      experience: 2,
      projects: [
        'tutore',
        'america',
        'ntw-digital',
        'carteira',
        'campanhas'
      ]
    },{
      key: 'php',
      icon: 'simplePhp',
      experience: 3,
    },{
      key: 'html5',
      icon: 'simpleHtml5',
      experience: 4
    },{
      key: 'css3',
      icon: 'simpleCss3',
      experience: 3
    },{
      key: 'codeigniter',
      icon: 'simpleCodeigniter',
      experience: 1.5
    },{
      key: 'angularjs',
      icon: 'simpleAngular',
      experience: 1
    },{
      key: 'typescript',
      icon: 'simpleTypescript',
      experience: 1
    },{
      key: 'mysql',
      icon: 'simpleMysql',
      experience: 2
    },{
      key: 'laravel',
      icon: 'simpleLaravel',
      experience: 1
    },{
      key: 'ionic',
      icon: 'simpleIonic',
      experience: 1
    },{
      key: 'nodejs',
      icon: 'simpleNodedotjs',
      experience: .5
    },{
      key: 'mongodb',
      icon: 'simpleMongodb',
      experience: .5
    },{
      key: 'express',
      icon: 'simpleExpress',
      experience: .3
    },{
      key: 'wordpress',
      icon: 'simpleWordpress',
      experience: 1
    },
  ];

  constructor() {
    this.languageChange.subscribe((value) => {
      this.lang = value;
    })
  }

  getTranslation(){
    return this.translation[this.lang];
  }

  getProjects(){
    return this.projects;
  }

  getLanguage(): {lang: string, icon: string} | any{
    return this.language.find((elem: {lang: string, icon: string}) => {
      return elem.lang == this.lang;
    });
  }

  getAvailableLanguages(): any{
    return this.language;
  }

  setLang(lang: string): Translation{
    // this.lang = lang;
    this.languageChange.next(lang);
    localStorage.setItem('default_lang', lang);
    return this.translation[this.lang];
  }

  getLang(): string{
    return this.lang;
  }
}
