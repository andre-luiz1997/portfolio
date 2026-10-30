import { Component, OnInit } from '@angular/core';
import { Translation } from 'src/app/i18n/translation.model';
import { LangService } from 'src/app/services/lang.service';

// Ícones registrados em provideIcons no AppModule
export const STACK = [
  { name: 'TypeScript', icon: 'simpleTypescript' },
  { name: 'JavaScript', icon: 'simpleJavascript' },
  { name: 'Node.js', icon: 'simpleNodedotjs' },
  { name: 'NestJS', icon: 'simpleNestjs' },
  { name: 'Angular', icon: 'simpleAngular' },
  { name: 'Ionic', icon: 'simpleIonic' },
  { name: 'MongoDB', icon: 'simpleMongodb' },
  { name: 'MySQL', icon: 'simpleMysql' },
  { name: 'Docker', icon: 'simpleDocker' },
  { name: 'Linux', icon: 'simpleLinux' },
  { name: 'Git', icon: 'simpleGit' },
  { name: 'PHP', icon: 'simplePhp' },
  { name: 'React', icon: 'simpleReact' }
];

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    standalone: false
})
export class SkillsComponent implements OnInit {
  lang: Translation;
  stack = STACK;

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
