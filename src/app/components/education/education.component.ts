import { Component, OnInit } from '@angular/core';
import { CarouselResponsiveOptions } from 'primeng/carousel';
import { LangService } from 'src/app/services/lang.service';

@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.scss'],
    standalone: false
})
export class EducationComponent implements OnInit {
  lang: any;
  educationItems: any = [];

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
    this.educationItems = Object.keys(this.lang.education_dsc);
  }

  ngOnInit(): void {
    this.langService.languageChange.subscribe((value) => {
      this.lang = this.langService.getTranslation();
    })
  }

}
