import { Component, OnInit } from '@angular/core';
import { Translation } from 'src/app/i18n/translation.model';
import { LangService } from 'src/app/services/lang.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    standalone: false
})
export class ContactComponent implements OnInit {
  lang: Translation;

  constructor(
    private langService: LangService
  ) {
    this.lang = this.langService.getTranslation();
  }

  ngOnInit(): void {
    this.langService.languageChange.subscribe((value) => {
      this.lang = this.langService.getTranslation();
    })
  }

}
