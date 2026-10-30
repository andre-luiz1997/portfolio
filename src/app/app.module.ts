import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import {
  simpleAngular, simpleDocker, simpleGit, simpleIonic, simpleJavascript, simpleLinux,
  simpleMongodb, simpleMysql, simpleNestjs, simpleNodedotjs, simplePhp, simpleReact, simpleTypescript
} from '@ng-icons/simple-icons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { HeroComponent } from './components/hero/hero.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { LangService } from './services/lang.service';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    HeroComponent,
    SkillsComponent,
    ExperienceComponent,
    EducationComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconComponent
  ],
  providers: [
    LangService,
    provideIcons({
      simpleTypescript, simpleJavascript, simpleNodedotjs, simpleNestjs, simpleAngular, simpleIonic,
      simpleMongodb, simpleMysql, simpleDocker, simpleLinux, simpleGit, simplePhp, simpleReact
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
