import { Component, OnInit } from '@angular/core';
import { CarouselResponsiveOptions } from 'primeng/carousel';
import { EDUCATION_KEYS } from 'src/app/i18n/translation.model';
import { LangService } from 'src/app/services/lang.service';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss'],
    standalone: false
})
export class EducationComponent implements OnInit {
  lang: any;
  educationItems = [...EDUCATION_KEYS];

  responsiveOptions: CarouselResponsiveOptions[] = [
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1
    }
  ];

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
