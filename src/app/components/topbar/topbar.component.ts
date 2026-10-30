import { Component, OnInit } from '@angular/core';
import { Translation } from 'src/app/i18n/translation.model';
import { LangService, LanguageOption } from 'src/app/services/lang.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    standalone: false
})
export class TopbarComponent implements OnInit {
  lang: Translation;
  currentLang: string;
  availableLanguages: LanguageOption[];

  constructor(
    private langService: LangService
  ) {
    this.lang = this.langService.getTranslation();
    this.currentLang = this.langService.getLang();
    this.availableLanguages = this.langService.getAvailableLanguages();
  }

  ngOnInit(): void {
    this.langService.languageChange.subscribe((value) => {
      this.lang = this.langService.getTranslation();
      this.currentLang = value;
    });
  }

  switchLanguage(language: string): void{
    this.langService.setLang(language);
  }

}
