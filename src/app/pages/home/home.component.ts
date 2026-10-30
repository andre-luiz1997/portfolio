import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Translation } from 'src/app/i18n/translation.model';
import { LangService } from 'src/app/services/lang.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    standalone: false
})
export class HomeComponent implements OnInit {
  lang: Translation;

  constructor(
    private langService: LangService,
    private title: Title
  ) {
    this.lang = this.langService.getTranslation();
  }

  ngOnInit(): void {
    this.title.setTitle('André Luiz · Tech Lead');
    this.langService.languageChange.subscribe((value) => {
      this.lang = this.langService.getTranslation();
    });
  }
}
