import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { marked } from 'marked';
import { Subscription } from 'rxjs';
import { ARTICLES, ArticleMeta } from 'src/app/articles/articles';
import { Translation } from 'src/app/i18n/translation.model';
import { LangService } from 'src/app/services/lang.service';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    standalone: false
})
export class ArticleComponent implements OnInit, OnDestroy {
  lang: Translation;
  meta?: ArticleMeta;
  /** HTML do Markdown; null enquanto carrega ou se falhar */
  html: string | null = null;
  failed = false;
  private subscriptions = new Subscription();

  constructor(
    private langService: LangService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private title: Title
  ) {
    this.lang = this.langService.getTranslation();
  }

  ngOnInit(): void {
    this.subscriptions.add(this.langService.languageChange.subscribe((value) => {
      this.lang = this.langService.getTranslation();
    }));
    this.subscriptions.add(this.route.paramMap.subscribe(params => this.load(params.get('slug') ?? '')));
  }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  formatDate(date: string): string {
    return this.langService.formatDate(date);
  }

  private load(slug: string): void {
    this.meta = ARTICLES.find(article => article.slug === slug);
    this.html = null;
    this.failed = false;
    if (!this.meta) {
      this.title.setTitle(`${this.lang.articles.notFoundTitle} · André Luiz`);
      return;
    }
    this.title.setTitle(`${this.meta.title} · André Luiz`);
    this.http.get(`assets/articles/${slug}.md`, { responseType: 'text' }).subscribe({
      next: markdown => this.html = marked.parse(markdown, { async: false }),
      error: () => this.failed = true
    });
  }
}
