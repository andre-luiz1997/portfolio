import { Component, OnInit } from '@angular/core';
import { LangService } from 'src/app/services/lang.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  lang: any;

  projects: any;

  selectedSkill: any;

  constructor(
    private langService: LangService
  ) {
    this.lang = this.langService.getTranslation();
    this.projects = this.langService.getProjects().reverse();
  }

  ngOnInit(): void {
    this.langService.languageChange.subscribe((value) => {
      this.lang = this.langService.getTranslation();
    })
  }

  openDetailsSection(skill: any){
    this.selectedSkill = this.projects.find((elem: any) => {
      return elem.key = skill;
    })
  }

  closeDetailsSection(){
    this.selectedSkill = undefined;
  }

}
