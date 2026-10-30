import { Component, OnInit } from '@angular/core';
import { Translation } from './i18n/translation.model';
import { LangService } from './services/lang.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false
})
export class AppComponent implements OnInit {
  lang: Translation;
  year = new Date().getFullYear();

  constructor(
    private langService: LangService
  ){
    this.lang = this.langService.getTranslation();
  }

  ngOnInit(): void {
    this.langService.languageChange.subscribe((value) => {
      this.lang = this.langService.getTranslation();
    });
  }
}
