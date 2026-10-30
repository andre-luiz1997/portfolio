import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/services/lang.service';

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss'],
    standalone: false
})
export class TopbarComponent implements OnInit {
  lang: any;
  langIcon: any;
  availableLanguages: any;

  constructor(
    private langService: LangService
  ) {
    this.lang = this.langService.getTranslation();
    this.configLanguage();
  }

  ngOnInit(): void {
  }

  private configLanguage(){
    this.langIcon = this.langService.getLanguage()?.icon;
    this.availableLanguages = this.langService.getAvailableLanguages().filter((elem:any) => {
      return elem.lang != this.langService.getLang();
    });
  }

  switchLanguage(language: any): void{
    this.lang = this.langService.setLang(language);
    this.configLanguage();
  }

}
