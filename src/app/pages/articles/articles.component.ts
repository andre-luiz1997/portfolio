import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ARTICLES } from 'src/app/articles/articles';
import { Translation } from 'src/app/i18n/translation.model';
import { LangService } from 'src/app/services/lang.service';

@Component({
    selector: 'app-articles',
    templateUrl: './articles.component.html',
    standalone: false
})
export class ArticlesComponent implements OnInit {
  lang: Translation;
  articles = ARTICLES;

  constructor(
    private langService: LangService,
    private title: Title
  ) {
    this.lang = this.langService.getTranslation();
  }

  ngOnInit(): void {
    this.updateTitle();
    this.langService.languageChange.subscribe((value) => {
      this.lang = this.langService.getTranslation();
      this.updateTitle();
    });
  }

  formatDate(date: string): string {
    return this.langService.formatDate(date);
  }

  private updateTitle(): void {
    this.title.setTitle(`${this.lang.articles.title} · André Luiz`);
  }
}
