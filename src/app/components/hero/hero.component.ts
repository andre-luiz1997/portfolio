import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  lang: any;
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
