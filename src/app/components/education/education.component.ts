import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/services/lang.service';
import { slider } from '../../services/slider.class';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  lang: any;
  educationItems: any = [];

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

  ngAfterViewInit(): void{
    slider(document.getElementById('education-card'));
  }

}
