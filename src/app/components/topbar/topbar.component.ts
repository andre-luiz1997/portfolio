import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  lang: any;
  langIcon: any;
  availableLanguages: any;
  showLanguageModal = false;

  constructor(
    private langService: LangService
  ) {
    this.lang = this.langService.getTranslation();
    this.configLanguage();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void{
    [].slice.call(document.getElementById('languageModal')?.children).map((elem: HTMLElement, index: number) => {
      elem.style.animation = `ease-down ${(index + 1) * .5}s ease`;
      // elem.style.animationDelay = `${(index + 1) * .1}s`;
    });
  }

  private configLanguage(){
    this.langIcon = this.langService.getLanguage()?.icon;
    this.availableLanguages = this.langService.getAvailableLanguages().filter((elem:any) => {
      return elem.lang != this.langService.getLang();
    });
  }

  openLanguageModal(): void{
    this.showLanguageModal = !this.showLanguageModal;
  }

  switchLanguage(language: any): void{
    this.lang = this.langService.setLang(language);
    this.configLanguage();
  }

}
